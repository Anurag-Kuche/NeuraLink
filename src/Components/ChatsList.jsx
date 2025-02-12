export default function ChatsList() {
    const chats = [
      { id: 1, name: "Alice", message: "Hey, how are you?", time: "2m ago" },
      { id: 2, name: "Bob", message: "Let's catch up!", time: "10m ago" },
    ];
  
    return (
      <div className="p-3">
        {chats.map((chat) => (
          <div
            key={chat.id}
            className="flex items-center justify-between p-3 rounded-lg bg-gray-800 hover:bg-gray-700 cursor-pointer mb-2"
          >
            <div>
              <h3 className="text-white">{chat.name}</h3>
              <p className="text-gray-400 text-sm">{chat.message}</p>
            </div>
            <p className="text-gray-500 text-xs">{chat.time}</p>
          </div>
        ))}
      </div>
    );
  }
  