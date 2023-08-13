import React from "react";
import Message from "./Message";
import {
  collection,
  query,
  onSnapshot,
  orderBy,
  limit,
} from "firebase/firestore";
import { useEffect } from "react";
import { db } from "../firebase";
import { useState } from "react";

const ChatBox = () => {
  const [messages, setMessages] = useState([]);

  // Grab the messages from Firestore db
  useEffect(() => {
    const q = query(
      collection(db, "messages"),
      orderBy("createdAt"),
      limit(50)
    );

    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const messages = [];
      querySnapshot.forEach((doc) => {
        messages.push({ ...doc.data(), id: doc.id });
        // console.log(doc.data());
      });
      setMessages(messages);
    });
    return () => unsubscribe;
  }, []);

  return (
    <div className="pb-44 pt-20 container-wrap px-10">
      {messages.map((message) => (
        <Message key={message.id} message={message} />
      ))}
    </div>
  );
};

export default ChatBox;
