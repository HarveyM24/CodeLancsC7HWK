import { useState } from 'react'
import './App.css'
import TodoApp from "./components/TodoApp.jsx"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <TodoApp />
    </>
  )
}

export default App
