import axios from "axios";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  createBadge,
  getBadges,
} from "../../redux/slices/badgeSlice";

const BadgeRequest = () => {
  let dispach = useDispatch();
  const [badgeName, setBadgeName] = useState("");
  const [badgeDescription, setBadgeDescription] = useState("");
  const [badgeReferance, setBadgeReferance] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const headers = {
    "Content-Type": "application/json",
  };

  // let initialBadgeState = {
  //   id:null,
  //   badgeName:"",
  //   description:"",
  //   referance:""
  // }
  const bx = useSelector((state) => state.badges);
  async function handleSubmit(event) {
    event.preventDefault();
    try {
      const createBadgeDispach = await dispach(
        createBadge(
          {
            badgeName: badgeName,
            description: badgeDescription,
            isApproved: false,
          },
          { headers }
        )
      );
      if (createBadge.fulfilled) {
        setIsSubmitted(true);
        console.log(createBadgeDispach.payload._id);
      }



      //     console.log("start");
      // console.log(createBadgeDispach)
      // console.log("end");
      //   .then(action=>{
      //     console.log(action.payload);
      //     setIsSubmitted(true)
      //   }).catch(e => {
      //   console.log(e)

      // });
      //  if(BadgesService.create.fulfilled.match(createBadgeDispach)){
      //     console.log(createBadgeDispach.payload);
      //   }
      // let res = BadgesService.create({
      //     badgeName: badgeName,
      //     description: badgeDescription,
      //     isApproved: false,
      //   },{headers})
      // let res = await axios.post(
      //   "/badge/create",
      //   {
      //     badgeName: badgeName,
      //     description: badgeDescription,
      //     isApproved: false,
      //   },
      //   { headers: headers }
      // );
      // if (res.status ===  200) {
      //   setIsSubmitted(true);
      // }
    } catch (err) {}
  }
  // let bs = badge.map(dat =>{
  //   return <div>
  //     {dat.badgeName}
  //   </div>
  // })
  return (
    <div>
      <div className="m-auto flex items-center justify-center mt-10">
        {isSubmitted === false && (
          <div className="bg-white rounded-lg shadow sm:max-w-md sm:w-full sm:mx-auto sm:overflow-hidden dark:bg-stone-800 ">
            <div className="px-4 py-8 sm:px-10">
              <div className="relative mt-6">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300"></div>
                </div>
                <div className="relative flex justify-center text-sm leading-5">
                  <span className="px-2 text-gray-500 bg-white">
                    Badge Request Form
                  </span>
                </div>
              </div>
              <div className="mt-6">
                <div className="w-full space-y-6">
                  <div className="w-full">
                    <div className=" relative ">
                      <input
                        type="text"
                        id="search-form-price"
                        className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2  focus:border-transparent"
                        placeholder="Badge Name"
                        onChange={(e) => setBadgeName(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="w-full">
                    <div className=" relative ">
                      <input
                        type="text"
                        id="search-form-location"
                        className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:border-transparent"
                        placeholder="Badge Description"
                        onChange={(e) => setBadgeDescription(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="w-full">
                    <div className=" relative ">
                      <input
                        type="text"
                        id="search-form-name"
                        className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:border-transparent"
                        placeholder="Referance"
                      />
                    </div>
                  </div>
                  <div>
                    <span className="block w-full rounded-md shadow-sm">
                      <button
                        type="button"
                        className="py-2 px-4  bg-green-600 hover:bg-green-700 focus:ring-green-500 focus:ring-offset-green-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
                        onClick={(e) => handleSubmit(e)}
                      >
                        Send Request
                      </button>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="px-4 py-6 border-t-2 border-gray-200  sm:px-10">
              <p className="text-xs leading-5 text-gray-500">
                Please list current and current information of the the club,
                organization, or authority providing the badge.
              </p>
            </div>
          </div>
        )}
        {isSubmitted === true && (
          <div className="px-4 py-6 border-t-2 border-gray-200  sm:px-10">
            <p className="text-xl leading-5 text-gray-500">
              Request for {badgeName} has been submitted!
              {/* {bs} */}
            </p>
            <div className="mt-8 ">
              <a
                type="button"
                className="py-2 px-4 bg-green-600 hover:bg-green-700 focus:ring-green-500 focus:ring-offset-green-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
                href="userdash"
              >
                Go back to dashboard
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default BadgeRequest;
