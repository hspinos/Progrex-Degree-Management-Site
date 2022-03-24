import React from "react";
import CourseTable from '../../components/coursetable'

let fillerText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam nec feugiat lorem, sed efficitur nulla. Donec elementum augue ac ex suscipit fermentum.';

function UserProgress() {
    return (
        <div>
            <div className="text-center text-xl">
                Student: Example
            </div>
            <div className="text-center text-l py-4">
                Completed Courses
                <CourseTable/>
            </div>
            
        </div>
    );
    }

export default UserProgress;