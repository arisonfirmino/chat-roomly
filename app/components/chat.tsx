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
  prevMessages: boolean;
}

export default function Chat({
  messages,
  allMessages,
  prevMessages,
}: ChatProps) {
  return (
    <div className="flex h-full flex-col gap-5 overflow-auto bg-main bg-chat-bg bg-cover bg-center p-2.5 xl:bg-none">
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
