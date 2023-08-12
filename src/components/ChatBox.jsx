import React from 'react'

const ChatBox = () => {
  const messages = [
    {
      id: 1,
      message: "Blue jays forever!"
    },
    {
      id: 2,
      message: "Big fan from Toronto."
    }
  ]
  return (
    <div className="pb-44 pt-20 container-wrap">
      {messages.map(message => {
        <Message message={message} />
      })}
    </div>
  )
}

export default ChatBox
