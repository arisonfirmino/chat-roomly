import Image from "next/image";

interface MessageProps {
  name: string;
  image: string;
  message: string;
}

export default function Message({ name, image, message }: MessageProps) {
  return (
    <div className="flex items-end justify-start gap-2.5 pr-10 md:pr-0">
      <Image
        src={image}
        alt={name}
        height={350}
        width={350}
        className="h-7 w-7 rounded-full"
      />

      <div className="flex flex-col gap-0.5 rounded-xl bg-background px-2.5 py-1 md:max-w-[600px]">
        <h3 className="text-left text-sm font-medium text-primary">{name}</h3>
        <p className="text-base text-black" style={{ wordBreak: "break-word" }}>
          {message}
        </p>
      </div>
    </div>
  );
}
