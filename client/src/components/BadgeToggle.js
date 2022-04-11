import React, { useEffect, useState } from "react";

const BadgeToggle = (props) => {
    let [toggleBadge, setToggleBadge] = useState(false);
  const toggle = () => {
    setToggleBadge(!toggleBadge);
    console.log("toggle " + toggleBadge);
  };

 
  return (
    <div>
      <button
        className="w-full font-thin uppercase text-green-500 flex items-center p-4 my-2 transition-colors duration-200 justify-start bg-gradient-to-r from-white to-blue-100 border-r-4 border-green-500 dark:from-gray-700 dark:to-gray-800 border-r-4 border-blue-500"
    
      onClick={e=>toggle()}
      >
        <span className="text-left">
          <svg
            width="20"
            height="20"
            fill="currentColor"
            viewBox="0 0 2048 1792"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M1070 1178l306-564h-654l-306 564h654zm722-282q0 182-71 348t-191 286-286 191-348 71-348-71-286-191-191-286-71-348 71-348 191-286 286-191 348-71 348 71 286 191 191 286 71 348z"></path>
          </svg>
        </span>
        <div>
          <span className="mx-4 text-sm font-normal">Badges</span>
          {/* <p>
                        Quis consequat elit elit eu eiusmod eiusmod culpa cillum proident.
                    </p> */}
        </div>
      </button>
      {toggleBadge === true && (
        <ul className="ml-6 mt-2 w-full border-l-2 border-zinc-800 pl-6 text-sm">
          <li className="mb-4 transition duration-300 ease-in-out hover:text-white">
            <a href="#">All emails</a>
          </li>
          <li className="mb-4 transition duration-300 ease-in-out hover:text-white">
            <a href="#">Spam emails</a>
          </li>
          <li className="transition duration-300 ease-in-out hover:text-white">
            <a href="#" className="flex items-center">
              Favorites
              <span className="ml-4 flex h-8 w-8 items-center justify-center rounded-full bg-zinc-800 text-xs">
                78
              </span>
            </a>
          </li>
        </ul>
      )}
    </div>
  );
};

export default BadgeToggle;
