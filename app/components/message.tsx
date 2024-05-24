import Image from "next/image";

interface MessageProps {
  name: string;
  image: string;
  message: string;
}

export default function Message({ name, image, message }: MessageProps) {
  return (
    <div className="flex items-end justify-start gap-2.5">
      <Image
        src={image}
        alt={name}
        height={350}
        width={350}
        className="h-7 w-7 rounded-full"
      />

      <div className="flex w-full flex-col rounded-xl bg-background px-2.5 py-1 md:w-fit md:max-w-[350px]">
        <h3 className="text-left text-sm font-medium text-primary">{name}</h3>
        <p className="break-words text-base text-black">{message}</p>
      </div>
    </div>
  );
}
