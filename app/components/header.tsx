import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import { LuLogOut } from "react-icons/lu";

export default function Header() {
  const { data } = useSession();
  const handleSignOutClick = () => signOut();

  return (
    <header className="flex items-center justify-between bg-main px-5 py-2.5 text-background">
      <div className="flex items-center gap-2.5">
        <Image
          src={data?.user?.image ?? ""}
          alt={data?.user?.name ?? ""}
          height={350}
          width={350}
          className="w-10 rounded-full"
        />

        <h3 className="text-xl font-medium">{data?.user?.name ?? ""}</h3>
      </div>

      <button onClick={handleSignOutClick} className="active:text-red-600">
        <LuLogOut size={18} />
      </button>
    </header>
  );
}
