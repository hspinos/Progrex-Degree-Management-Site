import React, { useState } from 'react';
import axios from 'axios';

function UpdateUserPage() {

  function handleSubmit() {
    try {

    } catch (err) {

    }

  }

  const [fName, setFName] = useState('');
  const [lName, setLName] = useState('');

  return (
    <div className="flex flex-1 h-full justify-center content-center">
      <div>
        <form>
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