import React from "react";

const Message = ({ message }) => {
  return (
    <div>
      <div className="chat chat-start">
        <div className="chat-image avatar">
          <div className="w-10 rounded-full">
            <img src={message.avatar} />
          </div>
        </div>
        <div className="chat-header flex flex-col	items-baseline gap-x-1.5">
          {message.name}
          <time className="text-xs opacity-50">{new Date(message.createdAt.seconds*1000).toLocaleString()}</time>
        </div>
        <div className="chat-bubble">{message.text}</div>
      </div>
    </div>
  );
};

export default Message;
