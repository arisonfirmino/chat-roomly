import { io } from "socket.io-client";

export const socket = () => io("https://api-chat-roomly.onrender.com");
