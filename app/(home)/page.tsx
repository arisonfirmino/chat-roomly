"use client";

import { signIn, useSession } from "next-auth/react";
import LoginPage from "../components/login-page";
import App from "../components/app";

export default function Home() {
  const { data } = useSession();
  const handleLogInClick = () => signIn("google");

  return (
    <div className="flex h-screen w-full items-center justify-center bg-[#333333]">
      {data?.user ? <App /> : <LoginPage handleLogInClick={handleLogInClick} />}
    </div>
  );
}
