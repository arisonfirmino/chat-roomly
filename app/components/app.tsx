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
    <main className="flex h-screen w-full cursor-default items-center justify-center text-white xl:max-w-[500px] xl:py-10">
      <div className="flex h-full w-full flex-col xl:overflow-hidden xl:rounded-3xl">
        <Header />
        <Chat allMessages={allMessages} messages={messages} />
        <SendMessage submitForm={submitForm} />
      </div>
    </main>
  );
}
