import React from 'react'

const SendMessage = () => {
  return (
    <div className="bg-gray-200 fixed bottom-0 w-full py-10 shadow-lg">
      <form className="container-wrap">
        <input className="input" type="text" />
        <button>Send</button>
      </form>
    </div>
  )
}

export default SendMessage
