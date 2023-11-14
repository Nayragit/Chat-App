import React, { useState } from 'react'
import Message from './Message';

const MessageContainer = props => {

  const { data, getUserData, loggedInUser, updateConversationMessage } = props;
  
  const userData = getUserData(data?.contactId);
  const [message, setMessage] = useState('');

  const handleSendMessage = e => {
    const messageToSend = {
      id: data.messages.length + 1,
      userId: loggedInUser,
      message,
    }
    updateConversationMessage(messageToSend);
    setMessage('');
  }

  const handleMessgaeChange = e => {
    setMessage(e.target.value);
  }

  if(!data) {
    return <div className='messageContainer'></div>
  }

  return (
    <div className='messageContainer'>
      <div className='contactInfo'>
        <img className='profilePic' width='65px' height='65px' alt='...' src={userData.img_url} />
        {userData.name}
      </div>
      
      {data.messages.map(message => <Message message={message} loggedInUser={loggedInUser} /> )}
      <div className='messageInputContainer'>
        <input className='messageInput' value={message} placeholder='Type a message' onInput={handleMessgaeChange} />
        <button className='sendBtn' onClick={handleSendMessage} >Send</button>
      </div>
    </div>
  )
}

export default MessageContainer;
