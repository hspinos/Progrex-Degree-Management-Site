import axios from "axios";
import Cookies from "js-cookie";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createBadge, getBadges } from "../../redux/slices/badgeSlice";

const BadgeRequest = () => {
  if (!Cookies.get("userCookie")) {
    window.location.replace("/login?redirectLocation=badgerequest");
  }

  let dispach = useDispatch();
  const [badgeName, setBadgeName] = useState("");
  const [badgeDescription, setBadgeDescription] = useState("");
  const [badgeReferance, setBadgeReferance] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [select, setSelect] = useState(null);

  const [badgeList, setBadgesList] = useState([]);

  async function getBadges(userId) {
    try {
      let res = await axios.get(
        `http://localhost:8080/badge/list/common`,
        {},
        {
          headers: {
            "content-type": "application/json",
          },
        }
      );
      if (res.status === 200) {
        console.log("Badges retrieved!");
        setBadgesList(res.data);
      }
    } catch (err) {
      console.error(err);
    }
  }

  const getData = () => {
    let cookie = JSON.parse(Cookies.get("userCookie"));
    let bs = JSON.stringify(cookie.id);
    // setUser(JSON.parse(Cookies.get("userCookie")));
    getBadges(JSON.parse(bs));
  };

  useEffect(() => {
    getData();
  }, []);

  const headers = {
    "Content-Type": "application/json",
  };

  async function handleSubmit(event) {
    event.preventDefault();
    let cookie = JSON.parse(Cookies.get("userCookie"));
    let uid = cookie.id;
    try {
      await dispach(
        createBadge(
          {
            badgeName: badgeName,
            description: badgeDescription,
            isApproved: false,
            isCommon: true,
            requester: uid,
          },
          { headers }
        )
      );
      if (createBadge.fulfilled) {
        setIsSubmitted(true);
      }
    } catch (err) {}
  }

  const handleSelectChange = (e) => {
    setSelect(e);
    console.log(select);
  };
  const options = badgeList.map((item) => {
    console.log(item);
    return (
      <option key={item.id} value={item.id}>
        {item.badgeName}
      </option>
    );
  });
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
                  {/* <label class="w-full" for="commonbadges">
                    Select badge from list
                    <select
                      id="commonbadges"
                      onChangeCapture={(e) =>
                        handleSelectChange(e.target.value)
                      }
                      class="block w-full py-2 px-3 text-gray-500  border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500"
                      name="commonbadges"
                      placeholder="Select from common badges"
                    >
                      <option value="">Other</option>
                      {options}
                    </select>
                  </label> */}
                  {/* {select !== "other" && ( */}
                    {/* <div className="space-y-3"> */}
                      {/* <div className="my-2 text-center">OR</div> */}

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
                          <textarea
                            type="text"
                            id="search-form-location"
                            className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:border-transparent"
                            placeholder="Enter a brief description of the badge you're requesting."
                            onChange={(e) =>
                              setBadgeDescription(e.target.value)
                            }
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
                    {/* </div> */}
                  {/* )} */}
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
