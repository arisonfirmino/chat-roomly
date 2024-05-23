import { LuCopyright } from "react-icons/lu";
import { FcGoogle } from "react-icons/fc";

interface LoginPageProps {
  handleLogInClick: () => void;
}

export default function LoginPage({ handleLogInClick }: LoginPageProps) {
  return (
    <main className="relative flex min-h-screen w-full cursor-default flex-col items-center justify-center bg-main text-white">
      <div className="absolute top-0 mt-5 flex flex-col items-center gap-2.5 p-5 md:max-w-[600px]">
        <h1 className="text-xl font-bold">Chat Roomly</h1>

        <hr className="w-full border-primary" />

        <p className="text-center text-lg font-light">
          Este espaço foi criado para que você possa interagir e compartilhar
          ideias com outras pessoas em tempo real. Sinta-se à vontade para
          explorar todas as funcionalidades da aplicação.
        </p>
      </div>

      <div className="flex flex-col items-center gap-5">
        <button
          onClick={handleLogInClick}
          className="flex w-fit items-center gap-2.5 rounded-xl border border-solid border-primary p-2.5 text-lg active:bg-gray-400"
        >
          <FcGoogle size={20} />
          Sign in with Google
        </button>

        <p className="text-sm opacity-50">
          faça login para acessar a aplicação
        </p>
      </div>

      <p className="absolute bottom-0 mb-5 flex items-center gap-1 text-xs font-light opacity-50">
        <LuCopyright size={10} />
        2024 Arison. All Rights Reserved
      </p>
    </main>
  );
}
