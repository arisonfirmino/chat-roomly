"use client";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { FormData } from "./app";
import { LuArrowUp } from "react-icons/lu";
import { useSession } from "next-auth/react";

const schema = yup.object({
  message: yup.string().required(),
});

interface SendMessageProps {
  submitForm: (data: FormData) => void;
}

export default function SendMessage({ submitForm }: SendMessageProps) {
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
      className="flex items-center gap-2.5 bg-background p-2.5"
    >
      <textarea
        rows={1}
        {...register("message")}
        className="w-full rounded-full border border-solid border-gray-400 px-1.5 text-black outline-none"
      ></textarea>
      <button
        type="submit"
        className="rounded-full bg-primary p-1.5 active:bg-gray-400"
      >
        <LuArrowUp size={16} />
      </button>
    </form>
  );
}
