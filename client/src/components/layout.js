import React from 'react';

import Navbar from '../components/navbar';

function Layout({ children }) {
  return (
    <div className="Layout bg-black h-screen flex flex-col">
      <Navbar className="flex-none" />
      <main className="grow">{children}</main>
    </div>
  )
}

export default Layout;