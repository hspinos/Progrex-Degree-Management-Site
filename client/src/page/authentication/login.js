import React, { useState } from 'react';
import axios from 'axios';

function Login() {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  async function handleLoginClick(e) {
    e.preventDefault();
    try {
      let res = await axios.post(`${process.env.REACT_APP_URL}/user/login`, {
        username: username,
        password: password
      });
      console.log(res);
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <div className="h-full flex justify-center">
      <div className="flex items-center">
        <div className="bg-stone-800 items-center p-4 w-96 rounded-md">
          <h1 className="text-3xl text-center font-semibold mb-4">
            Login
          </h1>
          <form
            className="grid grid-cols-1 justify-center items-center"
            onSubmit={handleLoginClick}>
            <div className="grid mb-2">
              <input
                className="rounded-sm p-2 text-black"
                type="text"
                id="username"
                name="username"
                onChange={e => { setUsername(e.target.value) }}
              />
              <label className="font-sm text-lg font-semibold">Username</label>
            </div>
            <div className="grid mb-2">
              <input
                className="rounded-sm p-2 text-black"
                type="password"
                id="password"
                name="password"
                onChange={e => { setPassword(e.target.value) }} />
              <label className="text-lg font-semibold">Password</label>
            </div>
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