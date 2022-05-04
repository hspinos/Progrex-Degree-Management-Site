import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import Cookies from 'js-cookie';
import axios from 'axios';

// eslint-disable-next-line
const Navbar = (props) => {
  let user;
  var progressRoute = "userprogress";
  const history = useHistory();
   let [isAdmin, setIsAdmin] = useState(false)

   if (Cookies.get('userCookie')) {
    user = JSON.parse(Cookies.get('userCookie'));
  }

   const [student, setStudent] = useState([]);
   
   const getStudent = async () => {
    try {
      const response = await axios.get(`/user/detail/${user.id}`);
      const jsonData = await response.data

      console.log(jsonData);

      setStudent(jsonData);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getStudent();
  }, []);

  

  if(student.isAdmin == true){
    progressRoute = "adminprogress";
  }

  let menuItems = [{
    name: "Home",
    route: "userdash",
    id: 1,
  }, ,  {
    name: "Progress",
    route: "userprogress",
    id: 2,

  },
  {
    name: "About",
    route: "about",
    id: 3,
  }]



  




  // TODO this method needs to be moved into a service file
  async function handleSignout() {
    try {
      await axios.get('/user/logout');
      Cookies.remove('userCookie');

      // The following line refreshes the page after a successful logout
      history.push('/login')
    } catch (err) {
      alert('Failed to logout');
    }
  }

 
  let nav = menuItems.map((item) => {
    return (
      <li key={item.id}>
        <a href={item.route} className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
          <Link to={`/${item.route}`}>
            {item.name}
          </Link>
        </a>
      </li>)


  });

  return (
    <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-stone-800 w-full">
      <div className="container flex flex-wrap justify-between items-center mx-auto">
        <a href="#" className="flex items-center">
          <img
            src="assets/vectors/logo.svg"
            className="mr-3 h-6 sm:h-10"
            alt="ProgREX Logo"
          />
          <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
            ProgREX
          </span>
        </a>
        <div className="flex items-center md:order-2">
          {Cookies.get("userCookie") ? (
            <div>
              <button
                type="button"
                className="flex mr-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
                id="user-menu-button"
                aria-expanded="false"
                data-dropdown-toggle="dropdown"
              >
                <span className="sr-only">Open user menu</span>
                <img
                  className="w-8 h-8 rounded-full"
                  src="assets/profile_pics/blank-pfp.png"
                  alt="user photo"
                />
              </button>

                <div className="hidden z-50 my-4 text-base list-none bg-white rounded divide-y divide-gray-100 shadow dark:bg-stone-800 dark:divide-gray-600" id="dropdown">
                  <div className="py-3 px-4">
                    <span className="block text-sm text-gray-900 dark:text-white">{user.fName} {user.lName}</span>
                    <span className="block text-sm font-medium text-gray-500 truncate dark:text-gray-400">{user.fName}@progrex.edu</span>
                  </div>
                  <ul className="py-1" aria-labelledby="dropdown">
                    <li>
                      <a href="#" className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Dashboard</a>
                    </li>
                    <li>
                      <a className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">
                        <Link to="/userdocuments">
                          Documents
                        </Link>
                      </a>
                    </li>
                    <li>
                      <a href="#" className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Settings</a>
                    </li>
                    <li>
                      <a className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">
                        <Link to="/updateuserpage">
                          Update Information
                        </Link>
                      </a>
                    </li>
                    <li>
                      <a href="badgerequest" className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Request Badges</a>
                    </li>
                    <li>
                      <a onClick={handleSignout} className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Sign out</a>
                    </li>
                  </ul>
                </div>
                {/* <ul className="py-1" aria-labelledby="dropdown">
                  <li>
                    <a
                      href="#"
                      className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                    >
                      Dashboard
                    </a>
                  </li>
                  <li>
                    <a
                      href="userdocuments"
                      className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                    >
                      Documents
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                    >
                      Settings
                    </a>
                  </li>
                  <li>
                    <a
                      href="badgerequest"
                      className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                    >
                      Request Badges
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                    >
                      Sign out
                    </a>
                  </li>
                </ul> */}
              </div>
          )
              :(

              <div className="flex space-x-3">


                <a
                  className="py-2 px-4  bg-green-600 hover:bg-green-700 focus:ring-green-500 focus:ring-offset-green-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "

                >
                  <Link to="/login">
                    Login
                  </Link>
                </a>
                <a
                  className="py-2 px-4  bg-gray-600 hover:bg-gray-700 focus:ring-green-500 focus:ring-offset-green-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "

                >
                  <Link to="/signup">
                    Signup
                  </Link>
                </a>
                {/* <a className="bg-emerald-600 py-1 w-20 rounded-sm text-center" href="/signup">Signup</a>
                <a className="bg-sky-600 p-1 w-20 rounded-sm text-center" href="/login">Login</a> */}
            </div>
          )}
        </div>
        <div
          className="hidden justify-between items-center w-full md:flex md:w-auto md:order-1"
          id="mobile-menu-2"
        >
          <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
            {nav}

            {isAdmin && 
            <li>
              <a
                href="admindash"
                className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Admin Dashboard
              </a>
            </li>
            }
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
