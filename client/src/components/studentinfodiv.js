import React, { useState } from "react"
import data from "./mock-data.json"


function StudentInfoDiv() {
    return (
        <div className="flex items-center mt-5 mb-10">
            <div className="bg-stone-800 items-center p-4 w-screen rounded-md border-t-8 border-[#2BB673]">
                <p>Program, Concentration, Advisor, GPA, Acedemic Standing, Applied To Graduate, Campus</p>
            </div>
       </div>
    )
}
export default StudentInfoDiv;
