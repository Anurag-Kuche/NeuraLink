import { useState } from 'react'
import Sidebar from "./Components/Sidebar";
import Navbar from "./Components/Navbar";
import ChatWindow from "./Components/ChatWindow";

import './App.css'
import RegisterPage from './RegisterPage'
import LoginPage from './LoginPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="flex h-screen">
      <Sidebar/>
      <div className="flex flex-col flex-1">
        <Navbar />
        <ChatWindow />
      </div>
    </div>
  );
}

export default App
