import Messages from "./Messages";
import MessageInput from "./MessageInput";

export default function ChatWindow() {
  return (
    <div className="flex-1 flex flex-col bg-gray-900">
      <div className="flex-1 overflow-y-auto p-4">
        <Messages />
      </div>
      <MessageInput />
    </div>
  );
}
