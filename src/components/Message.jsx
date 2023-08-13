import React from "react";

const Message = ({ message }) => {
  return (
    <div>
      <div className="chat chat-start">
        <div className="chat-image avatar">
          <div className="w-10 rounded-full">
            <img src="" />
          </div>
        </div>
        <div className="chat-header">
          {message.name}
          <time className="text-xs opacity-50"></time>
        </div>
        <div className="chat-bubble">{message.text}</div>
      </div>
    </div>
  );
};

export default Message;
