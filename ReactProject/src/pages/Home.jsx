import React from 'react'
import { Link } from 'react-router-dom'
export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <Link to="/tasks" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Open Task Manager</Link>
    </div>
  )
}
