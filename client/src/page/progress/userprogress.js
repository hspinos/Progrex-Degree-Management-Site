import React from "react";

let fillerText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam nec feugiat lorem, sed efficitur nulla. Donec elementum augue ac ex suscipit fermentum.';

function UserProgress() {
    let courses=[{
        name:"Course 1",
        couresYear:"2018",
        id:1,
      },{
        name:"Course 2",
        courseYear:"2019",
        id:2,
      },{
        name:"Course 3",
        courseYear:"2029",
        id:3,
      },{
        name:"Course 4",
        courseYear:"2020",
        id:4,
      },{
        name:"Course 5",
        courseYear:"2019",
        id:5,
      },{
        name:"Course 6",
        courseYear:"2020",
        id:6,
      }]

    return (
        <div className="table w-full">
            <div className="table-header-group">
                <div className="table-row">
                    <div className="table-cell text-left">Course</div>
                    <div className="table-cell text-left">Coure Year</div>
                </div>
            </div>    
        </div>
    );
    }

export default UserProgress;