"use client";

import { useSession } from "next-auth/react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import {
  ArrowUpIcon,
  EllipsisIcon,
  MessageSquareIcon,
  MessageSquareOffIcon,
} from "lucide-react";
import { FormData } from "./app";
import { Message } from "./app";

const schema = yup.object({
  message: yup.string().required(),
});

interface SendMessageProps {
  submitForm: (data: FormData) => void;
  prevMessages: boolean;
  setPrevMessages: () => void;
  allMessages: Message[];
}

export default function SendMessage({
  submitForm,
  prevMessages,
  setPrevMessages,
}: SendMessageProps) {
  const { data } = useSession();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const name = data?.user?.name ?? "";
  const image = data?.user?.image ?? "";

  const handleKeyDown = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.key === "Enter" && !event.shiftKey) {
      handleSubmit(onSubmit)();
      event.preventDefault();
    }
  };

  const onSubmit = (data: { message: string }) => {
    const formData = {
      name,
      image,
      message: data.message,
    };

    submitForm(formData);
    reset();
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex items-center gap-2.5 bg-background p-2.5 text-background"
    >
      <div className="flex items-center gap-2.5">
        <button
          onClick={setPrevMessages}
          type="button"
          className="flex items-center justify-center rounded-full bg-primary p-1.5 active:bg-gray-400"
        >
          {prevMessages ? (
            <MessageSquareIcon size={16} />
          ) : (
            <MessageSquareOffIcon size={16} />
          )}
        </button>

        <button
          type="button"
          className="flex cursor-not-allowed items-center justify-center rounded-full bg-primary p-1.5"
        >
          <EllipsisIcon size={16} />
        </button>
      </div>

      <textarea
        rows={1}
        {...register("message")}
        onKeyDown={handleKeyDown}
        className={`w-full rounded-full border border-solid px-2.5 text-black outline-none ${errors.message ? "border-red-600" : "border-gray-400"}`}
      ></textarea>
      <button
        type="submit"
        className="rounded-full bg-primary p-1.5 active:bg-gray-400"
      >
        <ArrowUpIcon size={16} />
      </button>
    </form>
  );
}
