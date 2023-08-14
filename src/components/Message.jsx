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
          className={`chat-header flex text-[#1d2d5c] items-center gap-2
        ${message.uid === currentUser.uid ? "flex-row-reverse	" : ""}
        `}
        >
          <span className="font-semibold text-base">{message.name}</span>
          <time className="text-xs text-[#8f8f8f]">
            {message.createdAt?.seconds
              ? new Date(message.createdAt.seconds * 1000).toLocaleString()
              : null}
          </time>
        </div>
        <div className="chat-bubble bg-[#1d2d5c] text-[#e1e1e1]">{message.text}</div>
      </div>
    </div>
  );
};

export default Message;
