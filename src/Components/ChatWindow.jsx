import { useEffect, useState } from "react";
import io from "socket.io-client";

const socket = io("http://localhost:5000"); // Backend Server

export default function ChatWindow() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    socket.on("receive-message", (message) => {
      setMessages((prev) => [...prev, message]);
    });
  }, []);

  const sendMessage = (text) => {
    socket.emit("send-message", text);
    setMessages((prev) => [...prev, { text, sender: "You" }]);
  };

  return (
    <div>
      {messages.map((msg, index) => (
        <p key={index}>{msg.sender}: {msg.text}</p>
      ))}
      <button onClick={() => sendMessage("Hello!")}>Send</button>
    </div>
  );
}
