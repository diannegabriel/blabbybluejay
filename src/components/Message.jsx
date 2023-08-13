import React from "react";
import { UserAuth } from "../context/AuthContext";

const Message = ({ message }) => {
  const { currentUser } = UserAuth();
  return (
    <div>
      <div
        className={`chat ${
          message.uid === currentUser.uid ? "chat-end" : "chat-start"
        }`}
      >
        <div className="chat-image avatar">
          <div className="w-10 rounded-full">
            <img src={message.avatar} />
          </div>
        </div>
        <div
          className={`chat-header flex flex-col ${
            message.uid === currentUser.uid ? "items-end" : ""
          }`}
        >
          {/* // "chat-header flex flex-col	items-baseline gap-x-1.5" */}
          {message.name}
          <time className="text-xs opacity-50">
            {new Date(message.createdAt.seconds * 1000).toLocaleString()}
          </time>
        </div>
        <div className="chat-bubble">{message.text}</div>
      </div>
    </div>
  );
};

export default Message;
