import React from 'react';
import Cookies from 'js-cookie';
import { Link } from 'react-router-dom'

// eslint-disable-next-line
function Navbar() {

  let menuItems = [{
    name: "Home",
    route: "home",
    id: 1,
  }, {
    name: "About",
    route: "about",
    id: 2,
  }, {
    name: "Dashboard",
    route: "userdash",
    id: 3,
  }, {
    name: "Nav btn",
    route: "home",
    id: 4,
  }, {
    name: "Navbtn",
    route: "home",
    id: 5,
  }]



  let nav = menuItems.map((item) => {
    return <a key={item.id} href={item.route}> {item.name}</a>
  })
  return (
    <div className="Navbar">
      <nav className="flex items-center justify-between py-2 px-2 h-16">
        <div className="flex items-center space-x-4">
          <div>
            <div className="flex items-center flex-shrink-0">
              <span className="font-bold text-xl tracking-tight">DegreeWorks++</span>
            </div>
          </div>
          <div className="flex space-x-4">
            {/* <a href="#Home">Home</a>
            <a href="#Placeholder1">Placeholder</a>
            <a href="#Placeholder2">Placeholder</a> */}
            {nav}
          </div>
        </div>
        {
          Cookies.get('userCookie') ?
            <div>
              <a className="">Currently logged in as {Cookies.get('userCookie')}</a>
            </div>

            :

            <div className="flex space-x-3">
              <a className="bg-emerald-600 py-1 w-20 rounded-sm text-center" href="/signup">Signup</a>
              <a className="bg-sky-600 p-1 w-20 rounded-sm text-center" href="/login">Login</a>
            </div>
        }
      </nav>
    </div>
  )
}

export default Navbar;
