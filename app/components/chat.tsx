"use client";

import { useState } from "react";
import { LuChevronDown, LuChevronUp } from "react-icons/lu";
import { NewMessage } from "./app";
import { Message as MessageType } from "./app";
import Message from "./message";
import UserMessage from "./user-message";

interface ChatProps {
  messages: NewMessage[];
  allMessages: MessageType[];
}

export default function Chat({ messages, allMessages }: ChatProps) {
  const [prevMessages, setPrevMessages] = useState(false);

  return (
    <div className="flex h-full flex-col gap-5 overflow-auto bg-main bg-chat-bg bg-cover bg-center p-2.5">
      <button
        onClick={() => setPrevMessages(!prevMessages)}
        className={`flex items-center justify-center gap-2 rounded bg-[#7f00b2] ${prevMessages ? "bg-opacity-100" : "bg-opacity-70"}`}
      >
        mensagens anteriores
        {prevMessages ? <LuChevronUp /> : <LuChevronDown />}
      </button>

      {prevMessages && (
        <div className="flex flex-col gap-5">
          {allMessages.map((message) => (
            <Message
              key={message.id}
              name={message.name}
              image={message.image}
              message={message.message}
            />
          ))}
        </div>
      )}

      {messages.map((message, index) => (
        <div key={index}>
          {message.isOwner ? (
            <UserMessage
              name={message.name}
              image={message.image}
              message={message.message}
            />
          ) : (
            <Message
              name={message.name}
              image={message.image}
              message={message.message}
            />
          )}
        </div>
      ))}
    </div>
  );
}
