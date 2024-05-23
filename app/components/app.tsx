import Chat from "./chat";
import Header from "./header";
import SendMessage from "./send-message";

export default function App() {
  return (
    <main className="flex h-screen w-full items-center justify-center text-white xl:max-w-[500px] xl:py-10">
      <div className="flex h-full w-full flex-col xl:overflow-hidden xl:rounded-3xl">
        <Header />
        <Chat />
        <SendMessage />
      </div>
    </main>
  );
}
