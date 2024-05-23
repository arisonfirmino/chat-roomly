import { Message as MessageType } from "./app";
import Message from "./message";
import UserMessage from "./user-message";

interface ChatProps {
  messages: MessageType[];
}

export default function Chat({ messages }: ChatProps) {
  return (
    <div className="flex h-full flex-col gap-5 overflow-auto bg-main bg-chat-bg bg-cover bg-center p-2.5">
      {messages.map((message) => (
        <div key={message.id}>
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
