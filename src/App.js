import { useEffect, useState } from 'react';

import { dummyContacts } from './dummyData/contacts';
import { dummyConversations } from './dummyData/conversation';

import './App.css';
import Conversations from './components/Conversations';
import MessageContainer from './components/MessageContainer';
import NewConversation from './components/NewConversation';

function App() {

  const loggedInUser = "myUser";
  const [contacts, setContacts] = useState([]);
  const [conversations, setConversations] = useState([]);
  const [currentConversationId, setCurrentConversationId] = useState("");
  const [addingConversation, setAddingConversation] = useState(false);

  useEffect(() => {
    setContacts(dummyContacts);
    if(localStorage.getItem('conversationlist'))
      setConversations(JSON.parse(localStorage.getItem('conversationlist')));
    else
      setConversations(dummyConversations);
    setCurrentConversationId(dummyContacts[0].contactId)
  }, []);

  const getUserData = id =>  contacts.find(user => user.id === id);

  const getConversationData = () => conversations.find(conversation => conversation.contactId === currentConversationId);

  const updateCurrentConversationId = id => {
    setCurrentConversationId(id);
  }

  const updateConversationMessage = message => {
    const updatedConversations = conversations.map(conv => {
      if(conv.contactId !== currentConversationId)
        return conv;
      conv.messages.push(message);
      return conv;
    })
    setConversations(updatedConversations);
    localStorage.setItem('conversationlist', updatedConversations);
  }

  const closeModal = () => {
    setAddingConversation(false);
  }

  const openModal = () => {
    setAddingConversation(true);
  }

  const handleAddNewConversation = contactId => {
    const existingConv = conversations.find(conv => conv.contactId === contactId);
    if(existingConv){
      setCurrentConversationId(existingConv.id);
      return;
    }
    const newConv = {
      contactId,
      messages: []
    }

    const updatedConversations = [...conversations, newConv];
    setConversations(updatedConversations);
    setCurrentConversationId(contactId)
    closeModal();
  }
  
  return (
    <div className="App">
      <Conversations conversations={conversations} getUserData={getUserData} updateCurrentConversationId={updateCurrentConversationId} loggedInUser={loggedInUser} openModal={openModal} />
      <MessageContainer data={getConversationData(currentConversationId)} getUserData={getUserData} loggedInUser={loggedInUser} updateConversationMessage={updateConversationMessage} />
      <NewConversation showModal={addingConversation} closeModal={closeModal} contacts={contacts} handleAddNewConversation={handleAddNewConversation} />
    </div>
  );
}

export default App;
