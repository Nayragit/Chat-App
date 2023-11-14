import React from 'react'
import Modal from "@material-ui/core/Modal";
import NewConversationCard from './NewConversationCard';

const NewConversation = props => {

  const { showModal, closeModal, contacts, handleAddNewConversation } = props;

  return (
    <Modal onClose={closeModal} open={showModal}>
      <div className='newConvModal' >
        <h2>New Conversation</h2>
        {contacts.map(contact => 
          <NewConversationCard contact={contact} handleAddNewConversation={handleAddNewConversation} />
        )}
      </div>
    </Modal>
  )
}

export default NewConversation
