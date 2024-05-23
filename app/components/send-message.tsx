import { LuArrowUp } from "react-icons/lu";

export default function SendMessage() {
  return (
    <form className="flex items-center gap-2.5 bg-background p-2.5">
      <textarea
        rows={1}
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
