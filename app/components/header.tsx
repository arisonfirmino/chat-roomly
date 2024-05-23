"use client";

import { useSession } from "next-auth/react";
import Image from "next/image";

export default function Header() {
  const { data } = useSession();

  return (
    <header className="flex flex-col items-center gap-1.5 bg-background p-2.5">
      <Image
        src={data?.user?.image ?? ""}
        alt={data?.user?.name ?? ""}
        height={350}
        width={350}
        className="h-10 w-10 rounded-full"
      />

      <h3 className="text-base font-medium text-primary">
        {data?.user?.name ?? ""}
      </h3>
    </header>
  );
}
