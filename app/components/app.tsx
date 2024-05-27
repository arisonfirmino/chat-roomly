"use client";

import { useEffect, useState } from "react";
import Chat from "./chat";
import Header from "./header";
import SendMessage from "./send-message";
import { socket } from "../socket";

export interface FormData {
  name: string;
  image: string;
  message: string;
}

export interface NewMessage {
  name: string;
  image: string;
  message: string;
  isOwner: boolean;
}

export interface Message {
  id: string;
  name: string;
  image: string;
  message: string;
  isOwner: boolean;
  created_at: string;
}

export default function App() {
  const [socketInstance] = useState(socket());

  const [messages, setMessages] = useState<NewMessage[]>([]);
  const [allMessages, setAllMessages] = useState<Message[]>([]);
  const [prevMessages, setPrevMessages] = useState(false);

  useEffect(() => {
    socketInstance.on("messages", (messages) => {
      setAllMessages(messages);
    });
  }, [socketInstance]);

  useEffect(() => {
    socketInstance.on("message", (message) => {
      setMessages((prevMessages) => [...prevMessages, message]);
    });

    return () => {
      socketInstance.off("message");
    };
  }, [socketInstance]);

  const submitForm = (data: FormData) => {
    const { ...messageData } = data;
    const newMessage: NewMessage = { ...messageData, isOwner: true };
    socketInstance.emit("message", newMessage);
    setMessages((prevMessages) => [...prevMessages, newMessage]);
  };

  return (
    <main className="flex h-screen w-full xl:px-40 xl:py-10 2xl:px-60">
      <div className="flex h-full w-full flex-col xl:overflow-hidden xl:rounded-3xl">
        <Header />
        <Chat
          allMessages={allMessages}
          messages={messages}
          prevMessages={prevMessages}
        />
        <SendMessage
          submitForm={submitForm}
          allMessages={allMessages}
          prevMessages={prevMessages}
          setPrevMessages={() => setPrevMessages(!prevMessages)}
        />
      </div>
    </main>
  );
}
