import React from 'react'

const Message = props => {
  const { message, loggedInUser } = props;
  return (
    <div className='messageBlock' style={{
      display: 'flex',
      flexDirection: message.userId === loggedInUser ? 'row-reverse' : 'row',
    }}  >
      <p>
        {message.message}
      </p>
    </div>
  )
}

export default Message
