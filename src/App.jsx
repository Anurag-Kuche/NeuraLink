import { useState } from 'react'

import './App.css'
import RegisterPage from './RegisterPage'
import LoginPage from './LoginPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <LoginPage />
    </>
  )
}

export default App
