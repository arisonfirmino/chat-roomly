"use client";

import Image from "next/image";

interface UserMessageProps {
  name: string;
  image: string;
  message: string;
}

export default function UserMessage({
  name,
  image,
  message,
}: UserMessageProps) {
  return (
    <div className="flex items-end justify-end gap-2.5">
      <div className="flex flex-col rounded-xl bg-background px-2.5 py-1 md:w-fit md:max-w-[350px]">
        <h3 className="text-right text-sm font-medium text-primary">{name}</h3>
        <p className="text-base text-black" style={{ wordBreak: "break-word" }}>
          {message}
        </p>
      </div>

      <Image
        src={image}
        alt={name}
        height={350}
        width={350}
        className="h-7 w-7 rounded-full"
      />
    </div>
  );
}
