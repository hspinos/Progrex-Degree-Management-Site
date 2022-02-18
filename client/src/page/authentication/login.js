import React, { useState } from 'react';
import axios from 'axios';

function Login() {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  async function handleLoginClick(e) {
    e.preventDefault();
    try {
      let res = await axios.post('/user/login', {
        username: username,
        password: password
      });
      console.log(res);
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <div className="Login">
      <div className="flex justify-center">
        <div className="border-2 items-center px-4 py-4 rounded-sm w-96">
          <h1 className="text-3xl text-center font-semibold mb-4">
            Login
          </h1>
          <form className="grid grid-cols-1 justify-center items-center">
            <label className="font-sm text-lg font-semibold">Username</label>
            <input
              className="rounded-sm px-3 py-3 mb-4 text-black"
              type="text"
              id="username"
              name="username"
              onChange={e => { setUsername(e.target.value) }}
            />
            <label className="text-lg font-semibold">Password</label>
            <input
              className="rounded-sm px-3 py-3 mb-4 text-black"
              type="password"
              id="password"
              name="password"
              onChange={e => { setPassword(e.target.value) }} />
            <button
              className="bg-emerald-600 px-2 py-1 mt-2 rounded-sm text-white"
              onClick={handleLoginClick}>
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login;