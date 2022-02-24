import React, { useState } from 'react';
import axios from 'axios';

function Signup() {

  const [username, setUsername] = useState("");
  const [fName, setFName] = useState("");
  const [lName, setLName] = useState("");
  const [password, setPassword] = useState("");
  const [checkPass, setCheckPass] = useState("");

  async function handleSignup(e) {
    e.preventDefault();
    try {
      if (password == checkPass) {
        let res = await axios.post(`${process.env.REACT_APP_URL}/user/create`, {
          username: username,
          password: password,
          fName: fName,
          lName: lName
        });
        console.log(res);
        console.log(process.env.REACT_APP_URL)
      }
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <div className="flex justify-center content-center">
      <div className="border-2 items-center w-fit px-4 py-4 rounded-sm w-96">
        <h1 className="text-3xl text-center font-semibold mb-4">
          Signup
        </h1>
        <form
          className="grid grid-cols-1 justify-center items-center"
          onSubmit={handleSignup}>
          <div className="grid mb-2">
            <input
              className="rounded-sm p-2 text-black"
              type="text"
              id="username"
              name="username"
              required
              onChange={e => { setUsername(e.target.value) }}
            />
            <label className="font-semibold">Username</label>
          </div>
          <div className="flex space-x-4 mb-2">
            <div className="grid">
              <input
                className="rounded-sm p-2 text-black w-48"
                type="text"
                id="fName"
                name="fName"
                required
                onChange={e => { setFName(e.target.value) }}
              />
              <label className="font-semibold">First Name</label>

            </div>
            <div className="grid">
              <input
                className="rounded-sm p-2 text-black w-48"
                type="text"
                id="lName"
                name="lName"
                required
                onChange={e => { setLName(e.target.value) }}
              />
              <label className="font-semibold">Last Name</label>
            </div>
          </div>
          <div className="grid mb-2">
            <input
              className="rounded-sm p-2 text-black"
              type="password"
              id="password"
              name="password"
              required
              onChange={e => { setPassword(e.target.value) }} />
            <label className="font-semibold">Password</label>
          </div>
          <div className="grid mb-2">
            <input
              className="rounded-sm p-2 text-black"
              type="password"
              id="passwordCheck"
              required
              onChange={e => { setCheckPass(e.target.value) }}
              name="passwordCheck" />
            <label className="font-semibold">Confirm password</label>
          </div>
          <input type="submit" value="Signup" className="bg-emerald-600 px-2 py-1 mt-2 rounded-sm text-white" />
        </form>
      </div>
    </div>
  )
}

export default Signup;