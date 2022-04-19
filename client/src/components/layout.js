import React from 'react';

import Navbar from '../components/navbar';

function Layout(props) {

  const testBool = () => {
    console.log(props.authStatus)
  }

  return (
    <div className="flex justify-center">
      <div className="h-full min-h-full flex flex-col w-full">
        <Navbar
          className="flex-none"
          authStatus={props.authStatus}
        />
        <main className="grow">{props.children}</main>
      </div>
    </div>
  )
}

export default Layout;