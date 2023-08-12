import React from "react";
import Message from "./Message";

const ChatBox = () => {
  const messages = [
    {
      id: 1,
      text: "Blue jays forever!",
      author: "Maple"
    },
    {
      id: 2,
      text: "Big fan from Toronto.",
      author: "Leafs"
    },
  ];
  return (
    <div className="pb-44 pt-20 container-wrap">
      {messages.map((message) => (
        <Message key={message.id} message={message} />
      ))}
    </div>
  );
};

export default ChatBox;
