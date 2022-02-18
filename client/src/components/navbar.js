import React from 'react';

function Navbar() {
  return (
    <div className="Navbar">
      <nav className="flex items-center justify-between py-2 px-2">
        <div className="flex items-center space-x-4">
          <div>
            <div className="flex items-center flex-shrink-0">
              <span className="font-bold text-xl tracking-tight">DegreeWorks++</span>
            </div>
          </div>
          <div className="flex space-x-4">
            <a href="#Home">Home</a>
            <a href="#Placeholder1">Placeholder</a>
            <a href="#Placeholder2">Placeholder</a>
          </div>
        </div>
        <div className="flex space-x-3">
          <a className="bg-emerald-600 py-1 w-20 rounded-sm text-center" href="/signup">Signup</a>
          <a className="bg-sky-600 p-1 w-20 rounded-sm text-center" href="/login">Login</a>
        </div>
      </nav>
    </div>
  )
}

export default Navbar;
