import React from "react";
import CourseTable from '../../components/coursetable'
import StudentInfoDiv from "../../components/studentinfodiv";

function UserProgress() {
    return (
        <div className="h-full w-screen flex justify-center">
            <div className="flex-col w-10/12">
                <StudentInfoDiv />
                <CourseTable />
            </div>
        </div>
    );
}

export default UserProgress;