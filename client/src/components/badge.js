import React, { useState, useEffect, useCallback } from "react";

import { useDispatch, useSelector } from "react-redux";
import {
  requestBadge,
  getBadge,
  getBadges,
} from "../redux/slices/badgeSlice";
import { Link } from "react-router-dom";
import BadgesService from "../services/badgeService";
import { http } from "../axios-config";
import axios from "axios";


const Badge = () => {
    // let badgesList = [
    // {
    //   name: "badge 1",
    //   desc: "Ipsum nostrud anim ad incididunt cupidatat ut aliqua excepteur consequat.",
    //   id: 1,
    // },
    // {
    //   name: "badge 2",
    //   desc: "Ipsum nostrud anim ad incididunt cupidatat ut aliqua excepteur consequat.",
    //   id: 2,
    // },
    // {
    //   name: "badge 3",
    //   desc: "Proident aute cillum mollit deserunt eiusmod Lorem duis incididunt velit sint.",
    //   id: 3,
    // },
    // {
    //   name: "badge 4",
    //   desc: "Pariatur quis consequat consequat amet culpa incididunt aute elit consequat.",
    //   id: 4,
    // },
    // {
    //   name: "Badge 5",
    //   desc: "Do non ullamco laboris deserunt enim aliquip pariatur aute voluptate nulla consequat.",
    //   id: 5,
    // },
    // ];
    
    
  const [badgesList, setBadgesList] = useState([]);


  async function getBadges(ids) {
    try {    
      let res = await axios.post(`http://localhost:8080/badge/badges`, {
        ids:ids
      }, {
        headers: {
          'Content-Type': 'application/json'
        },
      });
      if (res.status === 200) {
        console.log("Badges retrieved!");
        setBadgesList(res.data)
      }
    } catch (err) {
      console.error(err);
    }
  }


  //  const getBadges = ids => {
  //   BadgesService.getAll(ids)
  //     .then(response => {
  //       console.log(response)
  //       setBadgesList(response.data);
  //     })
  //     .catch(e => {
  //       console.log(e);
  //     });
  // };

  useEffect(() => {
    getBadges(["623a1c4c3c3c23b9517a2e34","623a1b473c3c23b9517a0ec5","623a1dff3c3c23b9517a6a6d","623a1fc43c3c23b9517abcc6", "623a2be43c3c23b9517cb990"]);
  }, []);

  let randomSize=(min, max)=>{

  return Math.floor(Math.random() * (max - min) + min);


  }

  let badgesx = badgesList.map((item) => {
    return (
      <div key={item._id} className=" h-16 border-2 border-stone-700 rounded-md">
        <div className="flex flex-row items-center h-full p-2 space-x-5">
          <div className="w-12 bg-gray-300 h-12 rounded-full  overflow-clip ">
            <img src={`http://placekitten.com/${randomSize(45,55)}/${randomSize(50,55)}`} className="w-full cover-full" alt=""/>
          </div>
          <div className="flex flex-col">
            <div className="uppercase">{item.badgeName}</div>
            <div className="">{item.description}</div>
          </div>
        </div>
      </div>
    );
  });





  //  const initialBadgeState = {
  //   id: null,
  //   title: "",
  //   description: "",
  //   imageUrl: ""
  // };
  // const [currentBadge, setCurrentBadge] = useState(initialBadgeState);
  // const [message, setMessage] = useState("");


  // const getBadge = id => {
  //   BadgesService.get(id)
  //     .then(response => {
  //       setCurrentBadge(response.data);
  //     })
  //     .catch(e => {
  //       console.log(e);
  //     });
  // };

  // useEffect(() => {
  //   getBadge(1);
  // }, []);

  // badgesList.push({name:currentBadge.title,...currentBadge})


//   const [currentIndex, setCurrentIndex] = useState(-1);

//   const badges = useSelector(state => state.badges);
//   const badge = useSelector(state => state.badge);

//   console.log(badges)
  console.log(badgesList)
//   const dispatch = useDispatch();

//   const initFetch = useCallback(() => {
//     // dispatch(getBadges());
//     dispatch(getBadge(1));
//   }, [dispatch])

//   useEffect(() => {
//     initFetch()
//   }, [initFetch])

 

  


  return (
    <div className="space-y-1">{badgesx}
    {/* <p>{badges}</p> */}
    </div>
  )
}

export default Badge
