import React, { useEffect, useState } from 'react'
import ConversationCard from './ConversationCard';

const Conversations = props => {

  const { conversations, getUserData, updateCurrentConversationId, loggedInUser, openModal } = props;

  const [filteredConversation, setFilteredConversation] = useState([]);
  useEffect(()=>{
    setFilteredConversation(conversations);
  },[conversations]);

  const handleSearch = e => {
    const searchedConv = conversations.filter(conv => {
      const userData = getUserData(conv.contactId);
      if(!userData)
      return false;
      return userData.name.startsWith(e.target.value);
    })
    setFilteredConversation(searchedConv);
  }

  return (
    <div className='conversations' >
      <input className='searchConvInput' placeholder='Search' onInput={handleSearch} />
      <div className='conversationListHeader' >
        <strong>CONVERSATIONS</strong>
        <button className='newConvBtn' onClick={openModal} >New Conversation</button>
      </div>
      {filteredConversation.map(conversation => <ConversationCard data={conversation} getUserData={getUserData} updateCurrentConversationId={updateCurrentConversationId} loggedInUser={loggedInUser} />)}
    </div>
  )
}

export default Conversations
