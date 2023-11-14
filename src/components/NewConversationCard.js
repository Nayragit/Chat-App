import React from 'react'

const NewConversationCard = props => {
  const { contact, handleAddNewConversation } = props;

  const handleOnClick = () => {
    handleAddNewConversation(contact.id);
  }

  return (
    <div className='newConvCard' onClick={handleOnClick} >
      <img className='profilePic' width='65px' height='65px' alt='...' src={contact.img_url} />
      {contact.name}
    </div>
  )
}

export default NewConversationCard
