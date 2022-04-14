import React, { useEffect, useState } from "react";
import BadgeToggle from "./BadgeToggle";

const Sidebar = (props) => {
  let [toggleBadge, setToggleBadge] = useState(false);
  const toggle = () => {
    setToggleBadge(!toggleBadge);
    console.log("toggle " + toggleBadge);
  };
  return (
    <div>
      <div className=" hidden lg:block my-4 ml-4 shadow-lg relative w-80">
        <div className="bg-white rounded-lg dark:bg-stone-800">
          <div className="flex items-center justify-center pt-6">
            {/* <h1 className="mx-4 text-4xl font-normal">BADGES</h1> */}
          </div>
          <nav className="mt-6">
            <div>
              <div>
                <button
                  className="w-full font-thin uppercase text-green-500 flex items-center p-4 my-2 transition-colors duration-200 justify-start bg-gradient-to-r from-white to-blue-100 border-r-4 border-green-500 dark:from-gray-700 dark:to-gray-800 border-r-4 border-blue-500"
                  // onClick={(e) => toggle()}
                >
                  <div>
                    <span className="mx-4 text-sm font-normal">Badges</span>
                  </div>
                </button>
                {/* {toggleBadge === true && (
                  <ul className="ml-6 mt-2 w-full border-l-2 border-zinc-800 pl-6 text-sm">
                    <li className="mb-4 transition duration-300 ease-in-out hover:text-white">
                      <button >Reqested</button>
                    </li>
                    <li className="mb-4 transition duration-300 ease-in-out hover:text-white">
                      <button >Approved</button>
                    </li>
                    <li className="transition duration-300 ease-in-out hover:text-white">
                      <button  className="flex items-center">
                        Declined
                       
                      </button>
                    </li>
                  </ul>
                )} */}
              </div>
              <button
                className="w-full font-thin uppercase text-gray-500 dark:text-gray-200 flex items-center p-4 my-2 transition-colors duration-200 justify-start hover:text-green-500"
              >
                <span className="mx-4 text-sm font-normal">Projects</span>
              </button>
              <button
                className="w-full font-thin uppercase text-gray-500 dark:text-gray-200 flex items-center p-4 my-2 transition-colors duration-200 justify-start hover:text-green-500"
              >
                <span className="mx-4 text-sm font-normal">My tasks</span>
              </button>
              <button
                className="w-full font-thin uppercase text-gray-500 dark:text-gray-200 flex items-center p-4 my-2 transition-colors duration-200 justify-start hover:text-green-500"
              >
                <span className="mx-4 text-sm font-normal">Calendar</span>
              </button>
              {/* <button
                className="w-full font-thin uppercase text-gray-500 dark:text-gray-200 flex items-center p-4 my-2 transition-colors duration-200 justify-start hover:text-green-500"
                href="#"
              >
                <span className="text-left">
                  <svg
                    width="20"
                    height="20"
                    className="m-auto"
                    fill="currentColor"
                    viewBox="0 0 2048 1792"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M1070 1178l306-564h-654l-306 564h654zm722-282q0 182-71 348t-191 286-286 191-348 71-348-71-286-191-191-286-71-348 71-348 191-286 286-191 348-71 348 71 286 191 191 286 71 348z"></path>
                  </svg>
                </span>
                <span className="mx-4 text-sm font-normal">Time manage</span>
              </button> */}
              <button
                className="w-full font-thin uppercase text-gray-500 dark:text-gray-200 flex items-center p-4 my-2 transition-colors duration-200 justify-start hover:text-green-500"
              >
                <span className="mx-4 text-sm font-normal">Reports</span>
              </button>
              <button
                className="w-full font-thin uppercase text-gray-500 dark:text-gray-200 flex items-center p-4 my-2 transition-colors duration-200 justify-start hover:text-green-500"
              >
                <span className="mx-4 text-sm font-normal">Settings</span>
              </button>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
