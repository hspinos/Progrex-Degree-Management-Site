import React from "react";
import CoreTable from '../../components/coretable'
import StudentInfoDiv from "../../components/studentinfodiv";
import ElectivesTable from "../../components/electives";
function UserProgress() {
    return (
        <div className="h-full w-screen flex justify-center">
            <div className="flex-col w-10/12">
                <StudentInfoDiv />
                <CoreTable />
                <ElectivesTable/>
            </div>
        </div>
    );
}

export default UserProgress;