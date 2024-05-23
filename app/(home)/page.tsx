"use client";

import { signIn, useSession } from "next-auth/react";
import LoginPage from "../components/login-page";

export default function Home() {
  const { data } = useSession();
  const handleLogInClick = () => signIn("google");

  return (
    <>
      {data?.user ? (
        <div>hello world!</div>
      ) : (
        <LoginPage handleLogInClick={handleLogInClick} />
      )}
    </>
  );
}
