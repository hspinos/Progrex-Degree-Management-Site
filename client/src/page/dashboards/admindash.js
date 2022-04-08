import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  listBadge,
  approveBadge,
  denyBadge,
} from "../../redux/slices/badgeSlice";
const { DateTime } = require("luxon");

const AdminDash = () => {
  const dispach = useDispatch();
  let badges = useSelector((state) => state.badge);
  useEffect(() => {
    dispach(listBadge());
  }, []);

  const approve = (id) => {
      console.log(id)
    dispach(approveBadge(id));
  };
  const deny = (id) => {
    dispach(denyBadge(id));
  };

  console.log(badges);


    let badgesList = badges.map((item, index) => {
      return (
        item.status === "requested" && (
          <tr key={index}>
            <td className="px-5 py-5 border-b border-stone-600 dark:bg-stone-800 text-sm">
              <p className="text-gray-300 whitespace-no-wrap">
                {item.badgeName}
              </p>
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
                onClick={()=>approve(item._id)}
                className="px-3 py-1 inset-0 bg-green-600 font-semibold leading-tight rounded-full"
              >
                Approve
              </button>
              <button
                onClick={()=>deny(item._id)}
                className="px-3 py-1 inset-0 bg-red-600 font-semibold leading-tight rounded-full"
              >
                Deny
              </button>
            </td>
          </tr>
        )
      );
    });
  

  return (
    <div>
      <div className="container mx-auto px-4 sm:px-8 max-w-5xl">
        <div className="py-8">
          <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
            <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
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
                <tbody>
                   { badgesList }
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDash;
