import React, { useState } from 'react';
import axios from 'axios';

function Signup() {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [checkPass, setCheckPass] = useState("");

  async function handleSignup(e) {
    e.preventDefault();
    try {
      if (password == checkPass) {
        let res = await axios.post(`${process.env.REACT_APP_URL}/user/create`, {
          username: username,
          password: password
        });
        console.log(res);
        console.log(process.env.REACT_APP_URL)
      }
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <div className="Signup">
      <div className="flex justify-center">
        <div className="border-2 items-center px-4 py-4 rounded-sm w-96">
          <h1 className="text-3xl text-center font-semibold mb-4">
            Signup
          </h1>
          <form
            className="grid grid-cols-1 justify-center items-center"
            onSubmit={handleSignup}>
            <label className="font-sm text-lg font-semibold">Username</label>
            <input
              className="rounded-sm px-3 py-3 mb-4 text-black"
              type="text"
              id="username"
              name="username"
              required
              onChange={e => { setUsername(e.target.value) }}
            />
            <label className="text-lg font-semibold">Password</label>
            <input
              className="rounded-sm px-3 py-3 mb-4 text-black"
              type="password"
              id="password"
              name="password"
              required
              onChange={e => { setPassword(e.target.value) }} />
            <label className="text-lg font-semibold">Verify Password</label>
            <input
              className="rounded-sm px-3 py-3 mb-4 text-black"
              type="password"
              id="passwordCheck"
              required
              onChange={e => { setCheckPass(e.target.value) }}
              name="passwordCheck" />
            <input type="submit" value="Signup" className="bg-emerald-600 px-2 py-1 mt-2 rounded-sm text-white" />
          </form>
        </div>
      </div>
    </div>
  )
}

export default Signup;