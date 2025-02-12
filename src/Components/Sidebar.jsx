import { LogOut, Settings, User } from "lucide-react";

export default function Sidebar() {
  return (
    <div className="w-1/4 bg-gray-900 text-white p-4 flex flex-col">
      {/* Profile Section */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold">ChatVerse</h2>
        <button className="p-2 rounded-lg hover:bg-gray-700">
          <Settings size={20} />
        </button>
      </div>

      {/* User Info */}
      <div className="flex items-center space-x-3 mb-6">
        <User className="h-12 w-12 rounded-full bg-gray-700 p-2" />
        <div>
          <h3 className="text-lg">John Doe</h3>
          <p className="text-sm text-gray-400">Online</p>
        </div>
      </div>

      {/* Logout */}
      <button className="flex items-center space-x-2 text-red-500 hover:text-red-400">
        <LogOut size={18} />
        <span>Logout</span>
      </button>
    </div>
  );
}
