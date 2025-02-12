export default function Messages() {
    const messages = [
      { id: 1, text: "Hey! How's it going?", sender: "Alice" },
      { id: 2, text: "All good! You?", sender: "You" },
    ];
  
    return (
      <div>
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`p-3 my-2 max-w-xs ${
              msg.sender === "You" ? "bg-blue-600 text-white self-end ml-auto" : "bg-gray-700 text-white"
            } rounded-lg`}
          >
            {msg.text}
          </div>
        ))}
      </div>
    );
  }
  