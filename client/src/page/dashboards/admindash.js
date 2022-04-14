import Cookies from "js-cookie";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Sidebar from "../../components/sidebar";
import {
  listBadge,
  approveBadge,
  denyBadge,
} from "../../redux/slices/badgeSlice";
const { DateTime } = require("luxon");

const AdminDash = () => {

  if (!Cookies.get('userCookie')) {
    window.location.replace('/login?redirectLocation=admindash');
  }

  let cookie = JSON.parse(Cookies.get("userCookie"))
  let isAdmin = cookie.roles?.find(el=>el ==="admin")

  if(!isAdmin){
    window.location.replace('/login?redirectLocation=admindash')
  }


  const dispach = useDispatch();
  let badges = useSelector((state) => state.badge);
  useEffect(() => {
    dispach(listBadge());
  }, []);

  const approve = (id) => {
    dispach(approveBadge(id));
    dispach(listBadge());
  };
  const deny = (id) => {
    dispach(denyBadge(id));
    dispach(listBadge());
  };

  console.log(badges);
  const [filter, setFilter] = useState("requested");

  let badgesList = badges.map((item, index) => {
    return (
      <>
        
      {item.status === "requested" && filter === "requested" && (
        <tr key={index}>
          <td className="px-5 py-5 border-b border-stone-600 dark:bg-stone-800 text-sm">
            <p className="text-gray-300 whitespace-no-wrap">{item.badgeName}</p>
          </td>
          <td className="px-5 py-5 border-b border-stone-600 dark:bg-stone-800 text-sm">
            <p className="text-gray-300 whitespace-no-wrap">
              {item.description}
            </p>
          </td>
          <td className="px-5 py-5 border-b border-stone-600 dark:bg-stone-800 text-sm">
            <p className="text-gray-300 whitespace-no-wrap">
              {DateTime.fromISO(item.dateRequested).toLocaleString(
                DateTime.DATE_FULL
              )}
            </p>
          </td>
          <td className="px-5 py-5 border-b border-stone-600 dark:bg-stone-800 text-sm">
            <span className="relative inline-block px-3 py-1 font-semibold leading-tight">
              <span
                aria-hidden="true"
                className={`absolute inset-0 rounded-full ${
                  item.status === "approved" ? "bg-green-600" : "bg-red-600"
                }`}
              ></span>
              <span className={`relative whitespace-nowrap  inline-block`}>
                {item.status === "approved" ? "Approved" : "Not Approved"}{" "}
              </span>
            </span>
          </td>
          <td className="px-5 flex flex-row py-5 border-b space-x-2 border-stone-600 dark:bg-stone-800 text-sm">
            <button
              onClick={() => approve(item._id)}
              className="px-3 py-1 inset-0 bg-green-600 font-semibold leading-tight rounded-full"
            >
              Approve
            </button>
            <button
              onClick={() => deny(item._id)}
              className="px-3 py-1 inset-0 bg-red-600 font-semibold leading-tight rounded-full"
            >
              Deny
            </button>
          </td>
        </tr>
      )}
      

    {item.status === "approved" &&
      filter === "approved" && 
        <tr key={index}>
          <td className="px-5 py-5 border-b border-stone-600 dark:bg-stone-800 text-sm">
            <p className="text-gray-300 whitespace-no-wrap">{item.badgeName}</p>
          </td>
          <td className="px-5 py-5 border-b border-stone-600 dark:bg-stone-800 text-sm">
            <p className="text-gray-300 whitespace-no-wrap">
              {item.description}
            </p>
          </td>
          <td className="px-5 py-5 border-b border-stone-600 dark:bg-stone-800 text-sm">
            <p className="text-gray-300 whitespace-no-wrap">
              {DateTime.fromISO(item.dateRequested).toLocaleString(
                DateTime.DATE_FULL
              )}
            </p>
          </td>
          <td className="px-5 py-5 border-b border-stone-600 dark:bg-stone-800 text-sm">
            <span className="relative inline-block px-3 py-1 font-semibold leading-tight">
              <span
                aria-hidden="true"
                className={`absolute inset-0 rounded-full ${
                  item.status === "approved" ? "bg-green-600" : "bg-red-600"
                }`}
              ></span>
              <span className={`relative whitespace-nowrap  inline-block`}>
                {item.status === "approved" ? "Approved" : "Not Approved"}{" "}
              </span>
            </span>
          </td>
          <td className="px-5 flex flex-row py-5 border-b space-x-2 border-stone-600 dark:bg-stone-800 text-sm">
            {/* <button
              onClick={() => approve(item._id)}
              className="px-3 py-1 inset-0 bg-green-600 font-semibold leading-tight rounded-full"
            >
              Approve
            </button> */}
            <button
              onClick={() => deny(item._id)}
              className="px-3 py-1 inset-0 bg-red-600 font-semibold leading-tight rounded-full"
            >
              Deny
            </button>
          </td>
        </tr>
      
      }

      {item.status === "declined" &&
      filter === "declined" && 
        <tr key={index}>
          <td className="px-5 py-5 border-b border-stone-600 dark:bg-stone-800 text-sm">
            <p className="text-gray-300 whitespace-no-wrap">{item.badgeName}</p>
          </td>
          <td className="px-5 py-5 border-b border-stone-600 dark:bg-stone-800 text-sm">
            <p className="text-gray-300 whitespace-no-wrap">
              {item.description}
            </p>
          </td>
          <td className="px-5 py-5 border-b border-stone-600 dark:bg-stone-800 text-sm">
            <p className="text-gray-300 whitespace-no-wrap">
              {DateTime.fromISO(item.dateRequested).toLocaleString(
                DateTime.DATE_FULL
              )}
            </p>
          </td>
          <td className="px-5 py-5 border-b border-stone-600 dark:bg-stone-800 text-sm">
            <span className="relative inline-block px-3 py-1 font-semibold leading-tight">
              <span
                aria-hidden="true"
                className={`absolute inset-0 rounded-full ${
                  item.status === "approved" ? "bg-green-600" : "bg-red-600"
                }`}
              ></span>
              <span className={`relative whitespace-nowrap  inline-block`}>
                {item.status === "approved" ? "Approved" : "Not Approved"}{" "}
              </span>
            </span>
          </td>
          <td className="px-5 flex flex-row py-5 border-b space-x-2 border-stone-600 dark:bg-stone-800 text-sm">
            <button
              onClick={() => approve(item._id)}
              className="px-3 py-1 inset-0 bg-green-600 font-semibold leading-tight rounded-full"
            >
              Approve
            </button>
            {/* <button
              onClick={() => deny(item._id)}
              className="px-3 py-1 inset-0 bg-red-600 font-semibold leading-tight rounded-full"
            >
              Deny
            </button> */}
          </td>
        </tr>
      
      }
    </>

    )
  });

  return (
    <div>
      <div className="flex flex-row">
        <Sidebar />
        <div className="container mx-auto px-4  ">
          <div className="">
            <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
              <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
                <div className=" flex flex-row items-center min-w-full px-5 py-3 dark:bg-stone-700  border-b border-stone-600 text-gray-200  text-left text-sm uppercase font-normal">
                  <div className="font-semibold">
                    Filter: 
                  </div>
                  <select
                    className="ml-3 px-4  bg-green-600 hover:bg-green-700 focus:ring-green-500 focus:ring-offset-green-200 text-white transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg"
                    name="filter"
                    onChange={e=>setFilter(e.target.value)}
                  >
                    <option value="requested">requested</option>
                    <option value="approved">approved</option>
                    <option value="declined">declined</option>
                  </select>
                </div>
                <table className="min-w-full leading-normal">
                  <thead>
                    <tr>
                      <th
                        scope="col"
                        className="px-5 py-3 dark:bg-stone-700  border-b border-stone-600 text-gray-200  text-left text-sm uppercase font-normal"
                      >
                        Badge Name
                      </th>
                      <th
                        scope="col"
                        className="px-5 py-3 dark:bg-stone-700 border-b border-stone-600 text-gray-200  text-left text-sm uppercase font-normal"
                      >
                        Badge Description
                      </th>
                      <th
                        scope="col"
                        className="px-5 py-3 dark:bg-stone-700 border-b border-stone-600 text-gray-200  text-left text-sm uppercase font-normal"
                      >
                        Created at
                      </th>
                      <th
                        scope="col"
                        className="px-5 py-3 dark:bg-stone-700 border-b border-stone-600 text-gray-200  text-left text-sm uppercase font-normal"
                      >
                        Status
                      </th>
                      <th
                        scope="col"
                        className="px-5 py-3 dark:bg-stone-700 border-b border-stone-600 text-gray-200  text-left text-sm uppercase font-normal"
                      >
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody>{badgesList}</tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDash;
