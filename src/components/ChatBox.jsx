import React from "react";
import Message from "./Message";
import { collection, query, where, onSnapshot } from "firebase/firestore";
import { useEffect } from "react";
import { db } from "../firebase";

const ChatBox = () => {
  const messages = [
    {
      id: 1,
      text: "Blue jays forever!",
      author: "Maple",
    },
    {
      id: 2,
      text: "Big fan from Toronto.",
      author: "Leafs",
    },
  ];

  useEffect(() => {
    const q = query(collection(db, "messages"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const messages = [];
      querySnapshot.forEach((doc) => {
        // messages.push(doc.data().name);
        console.log(doc.data());
      });
    });
  }, []);
  return (
    <div className="pb-44 pt-20 container-wrap">
      {messages.map((message) => (
        <Message key={message.id} message={message} />
      ))}
    </div>
  );
};

export default ChatBox;
