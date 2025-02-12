import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import ChatWindow from "./ChatWindow";

export default function Home() {
  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      <div className="flex flex-col flex-1">
        <Navbar />
        <ChatWindow />
      </div>
    </div>
  );
}
