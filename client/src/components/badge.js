import React, { useState, useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  requestBadge,
  getBadges
} from "../redux/slices/badgeSlice";
import { Link } from "react-router-dom";


const Badge = () => {
    let badgesList = [
    {
      name: "badge 1",
      desc: "Ipsum nostrud anim ad incididunt cupidatat ut aliqua excepteur consequat.",
      id: 1,
    },
    {
      name: "badge 2",
      desc: "Ipsum nostrud anim ad incididunt cupidatat ut aliqua excepteur consequat.",
      id: 2,
    },
    {
      name: "badge 3",
      desc: "Proident aute cillum mollit deserunt eiusmod Lorem duis incididunt velit sint.",
      id: 3,
    },
    {
      name: "badge 4",
      desc: "Pariatur quis consequat consequat amet culpa incididunt aute elit consequat.",
      id: 4,
    },
    {
      name: "Badge 5",
      desc: "Do non ullamco laboris deserunt enim aliquip pariatur aute voluptate nulla consequat.",
      id: 5,
    },
  ];

  let badgesx = badgesList.map((item) => {
    return (
      <div key={item.id} className=" h-24 border-2 rounded-md">
        <div className="flex flex-row items-center h-full p-2 space-x-5">
          <div className="w-12 bg-gray-300 h-12 rounded-full "></div>
          <div className="flex flex-col space-y-3">
            <div className="">{item.name}</div>
            <div className="">{item.desc}</div>
          </div>
        </div>
      </div>
    );
  });



//   const [currentIndex, setCurrentIndex] = useState(-1);

  const badges = useSelector(state => state.badges);
  const dispatch = useDispatch();

  const initFetch = useCallback(() => {
    dispatch(getBadges());
  }, [dispatch])

  useEffect(() => {
    initFetch()
  }, [initFetch])

 

  


  return (
    <div>{badgesx}
    <p>{badges}</p></div>
  )
}

export default Badge
