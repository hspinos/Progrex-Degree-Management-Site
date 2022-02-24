import React from 'react';

import Navbar from '../components/navbar';

function Layout({ children }) {
  return (
    <div className="Layout bg-black h-screen grid">
      <Navbar />
      <main>{children}</main>
    </div>
  )
}

export default Layout;