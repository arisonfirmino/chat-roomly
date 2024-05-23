"use client";

import { useState } from "react";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import { LuX } from "react-icons/lu";

export default function Header() {
  const [showSignOut, setShowSignOut] = useState(false);
  const { data } = useSession();
  const handleSignOutClick = () => signOut();

  return (
    <header className="flex flex-col items-center gap-1.5 bg-background p-2.5">
      <button
        onMouseEnter={() => setShowSignOut(true)}
        onMouseLeave={() => setShowSignOut(false)}
        onClick={handleSignOutClick}
        className="flex h-10 w-10 items-center justify-center rounded-full bg-red-600"
      >
        {showSignOut ? (
          <LuX size={20} />
        ) : (
          <Image
            src={data?.user?.image ?? ""}
            alt={data?.user?.name ?? ""}
            height={350}
            width={350}
            className="h-10 w-10 rounded-full"
          />
        )}
      </button>

      <h3 className="text-base font-medium text-primary">
        {data?.user?.name ?? ""}
      </h3>
    </header>
  );
}
