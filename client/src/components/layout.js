import React from 'react';

import Navbar from '../components/navbar';

function Layout({ children }) {
  return (
    <div className="flex justify-center">
      <div className="bg-black h-screen flex flex-col w-8/12">
        <Navbar className="flex-none" />
        <main className="grow">{children}</main>
      </div>
    </div>
  )
}

export default Layout;