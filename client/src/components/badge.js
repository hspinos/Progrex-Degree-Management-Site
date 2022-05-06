import React, { useState, useEffect, useCallback, useMemo } from "react";
import Cookies from "js-cookie";

import { useDispatch, useSelector } from "react-redux";
import { requestBadge, getBadgesByIds,listBadge } from "../redux/slices/badgeSlice";
import { Link } from "react-router-dom";
import BadgesService from "../services/badgeService";
import { http } from "../axios-config";
import axios from "axios";

let badgeArray = [
  'ArtAndDesignBadge.jpg',
  'BrainBadge.jpg',
  'DiplomaBadge.jpg',
  'ScienceBadge.jpg',
  'UniversityBadge.jpg'
]

let randomSize = (min, max) => {
  return Math.floor(Math.random() * (max - min) + min);
};

function generateBadge() {
  let badgeName = badgeArray[randomSize(0, 5)];
  return badgeName;
}

const Badge = () => {

  const [badgesList, setBadgesList] = useState([]);
  const [user, setUser] = useState({});
  const [badges, setBadges] = useState({});
  const [length, setLength] = useState(0)
  const dispach = useDispatch()
  const s = useSelector(data=>data.badges)
  async function getBadges(userId) {
    try {
      let res = await axios.post(
        `http://localhost:8080/badge/badgeswithuid`,
        {
          userId: userId,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (res.status === 200) {
        console.log("Badges retrieved!");
        setBadgesList(res.data);
        setLength(badgesList.length)
      }
    } catch (err) {
      console.error(err);
    }
  }

   const getData = () => {
    let cookie = JSON.parse(Cookies.get("userCookie"))
    let bs = JSON.stringify(cookie.id)
    // setUser(JSON.parse(Cookies.get("userCookie")));
    getBadges(JSON.parse(bs))
  };

  useEffect(() => {
   getData()
  },[]);



  let badgesx = badgesList.map((item) => {
    return (
      (item.status !== "declined" && 
      <tr>
        <div
        key={item._id}
        className=" h-16 border-2 border-stone-700 rounded-md "
        >
        <div className="flex flex-row items-center h-full p-2 space-x-5">
          <div className="w-12 bg-gray-300 h-12 rounded-full overflow-clip flex-none ">
            <img
              src={'assets/temp_badge_pics/' + generateBadge()}
              className="w-full cover-full flex-none"
              alt=""
            />
          </div>
          <div className="flex flex-col items-start text-left leading-snug text-truncate">
            <div className=" font-simibold text-md ">{item.badgeName}</div>
            <div className="leading-3 overflow-clip text-sm font-light text-truncate">{item.description}</div>
            {item.status ==="requested" && 
            
            <div className=" flex flex-row items-center space-x-1 flex-none w-full h-full">
              <div className=" w-2 h-2 flex-none rounded-full bg-yellow-500"></div>


              <span className=" opacity-75 text-gray-600 ">
              pending approval

              </span>

              </div>

            }
          </div>
        </div>
      </div>
      </tr>
      
    ));
  });
  return (
    <tbody className="space-y-1 overflow-y-scroll">
      {badgesx}
    </tbody>
  );
};

export default Badge;
