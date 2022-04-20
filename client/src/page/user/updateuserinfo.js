import React, { useState } from 'react';
import Cookies from "js-cookie"
import axios from 'axios';

function UpdateUserPage() {

  var user;

  if (Cookies.get('userCookie')) {
    user = JSON.parse(Cookies.get('userCookie'));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    let userUpdateData = {};
    if (fName) userUpdateData["fName"] = fName;
    if (lName) userUpdateData["lName"] = lName;
    if (avatarNum) userUpdateData["avatarNum"] = avatarNum;
    if (badgeNum) userUpdateData["displayBadgeNum"] = badgeNum;

    try{
      let res = await axios.put(`/user/update/${user.id}`, userUpdateData);
      console.log(res)
      window.location.reload();
    }catch(err){
      console.error(err);
    }
  }

  const [fName, setFName] = useState('');
  const [lName, setLName] = useState('');
  const [avatarNum, setAvatarNum] = useState('');
  const [badgeNum, setBadgeNum] = useState('');

  return (
    <div className="flex flex-1 h-full justify-center content-center">
      <div>
        <form onSubmit={handleSubmit}>
          <div>
            <label>First Name:</label>
            <br />
            <input className="rounded-md text-black" type="text" name="fName" onChange={e => setFName(e.target.value)} />
          </div>
          <div>
            <label>Last Name:</label>
            <br />
            <input className="rounded-md text-black" type="text" name="lName" onChange={e => setLName(e.target.value)} />
          </div>
          <div>
            <label>Avatar Number:</label>
            <br />
            <input className="rounded-md text-black" type="text" name="avatarNum" onChange={e => setAvatarNum(e.target.value)} />
          </div>
          <div>
            <label>Badge Number:</label>
            <br />
            <input className="rounded-md text-black" type="text" name="badgeNum" onChange={e => setBadgeNum(e.target.value)} />
          </div>
          <br />
          <div className="bg-green-500 text-center rounded-md p-2">
            <input type="submit" value="Submit Changes" />
          </div>
        </form>
      </div>
    </div>
  )
}

export default UpdateUserPage;