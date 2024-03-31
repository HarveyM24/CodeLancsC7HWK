import React from 'react'
import {Outlet, Link} from 'react-router-dom'

export default function GuestLayout() {
  return (
    <>
        <header className="bg-gradient-to-r from-yellow-500 to-purple-500 h-20 w-full p-3 flex justify-between items-center">
            <div>  
                <h1 className="font-semibold text-black text-2xl ">React Project</h1>
            </div>

            <ul className="text-black font-semibold flex items-center gap-2 ">
                <li className="bg-green-300 rounded-md p-2 mb-2">
                    <Link className="m-auto p-2" to="/">Home</Link>
                    <Link className="m-auto p-2" to="/tasks">Tasks</Link>
                </li>
                
            </ul>
        </header>

        <Outlet />
    </>
  )
}
