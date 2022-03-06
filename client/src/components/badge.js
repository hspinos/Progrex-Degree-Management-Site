import React from "react";

const Badge = ({id,name,desc}) => {
  return (
    <div>
      <div key={id} className=" h-24 border-2 rounded-md">
        <div className="flex flex-row items-center h-full p-2 space-x-5">
          <div className="w-12 bg-gray-300 h-12 rounded-full "></div>
          <div className="flex flex-col space-y-3">
            <div className="">{name}</div>
            <div className="">{desc}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Badge;
