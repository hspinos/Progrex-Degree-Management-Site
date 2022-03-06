import React from 'react';

import Navbar from '../components/navbar';

function Layout({ children }) {
  return (
    <div className="flex justify-center">
      <div className="h-screen flex flex-col w-full">
        <Navbar className="flex-none" />
        <div className="h-full flex justify-center">
          <div className="w-9/12">
            <main className="grow">{children}</main>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Layout;