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
          className={`chat-header flex flex-col text-[#3c5488] ${
            message.uid === currentUser.uid ? "items-end" : ""
          }`}
        >
          {message.name}
          <time className="text-xs text-[#3d3f43a0]">
            {message.createdAt?.seconds
              ? new Date(message.createdAt.seconds * 1000).toLocaleString()
              : null}
          </time>
        </div>
        <div className="chat-bubble">{message.text}</div>
      </div>
    </div>
  );
};

export default Message;
