import { Send } from "lucide-react";

export default function MessageInput() {
  return (
    <div className="p-3 flex items-center bg-gray-800">
      <input
        type="text"
        placeholder="Type a message..."
        className="flex-1 p-2 rounded-lg bg-gray-700 text-white outline-none"
      />
      <button className="ml-2 bg-blue-600 p-2 rounded-lg">
        <Send size={20} className="text-white" />
      </button>
    </div>
  );
}
