import React from 'react'

const ConversationCard = (props) => {

  const { data, getUserData, updateCurrentConversationId, loggedInUser } = props;

  const userData = getUserData(data.contactId);

  const lastMessage = () => {
    let lastText = '';
    if(data.messages.length > 0){
      const message = data.messages[data.messages.length - 1];
      lastText = message.userId === loggedInUser
        ? "You: " + message.message
        : message.message;
    }
    return lastText;
  }

  return (
    <div className='conversationCard' onClick={() => updateCurrentConversationId(data.contactId)} >
      <img className='profilePic' width='65px' height='65px' alt='...' src={userData.img_url} />
      <div className='conversationCardDetails' >
        <strong>{userData.name}</strong>
        <p>{lastMessage()}</p>
      </div>
    </div>
  )
}

export default ConversationCard
