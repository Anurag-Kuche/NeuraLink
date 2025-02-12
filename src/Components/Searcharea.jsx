
import { Search } from "lucide-react";

export default function Search() {
  return (
    <div className="p-3">
      <div className="relative">
        <Search className="absolute left-3 top-2.5 text-gray-400" />
        <input
          type="text"
          placeholder="Search..."
          className="w-full pl-10 p-2 rounded-lg bg-gray-800 text-white outline-none"
        />
      </div>
    </div>
  );
}
