import React from 'react';

import Navbar from '../components/navbar';

function Layout({ children }) {
  return (
    <div className="flex justify-center">
      <div className="h-full min-h-full flex flex-col w-full">
        <Navbar className="flex-none" />
            <main className="grow">{children}</main>
          </div>
    </div>
  )
}

export default Layout;