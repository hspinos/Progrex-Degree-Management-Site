import React, { useState } from "react"
import data from "./mock-studentdata.json"
import Cookies from "js-cookie";



function StudentInfoDiv() {
    var user;
    if(Cookies.get('userCookies')){
        user = JSON.parse(Cookies.get('userCookie'));
    }
    

    const [students, setStudent] = useState(data);
    return (
        <div>
            <div className="flex items-center mt-5 mb-10">
                <div className="bg-stone-800 items-center p-4 w-screen rounded-md border-t-8 border-[#2BB673] whitespace-pre">
                    <div class="h- p-3">
                    <div class="grid grid-cols-3 gap-4 mt-2">
                        <div class="h-8 bg-stone-600 rounded border-2 border-stone-400 text-white text-center">{user.fName}</div>
                        <div class="h-8 bg-stone-600 rounded border-2 border-stone-400 text-white text-center">{student.StudentID}</div>
                        <div class="h-8 bg-stone-600 rounded border-2 border-stone-400 text-white text-center">{student.Pathway}</div>
                    </div>
                </div>
                    <div className="grid grid-cols-3 gap-4 mt-3 font-bold">
                        <p>Program: {student.Program}</p> 
                        <p>Concentration:   {student.Concentration}</p>
                        <p>Advisor:   {student.Advisor} </p>
                        <p>GPA:  {student.GPA}</p>
                        <p>Acedemic Standing:   {student.Acedemicstanding}</p>
                        <p>Applied To Graduate:  {student.AppliedToGraduate}</p>
                        <p>Campus: {student.Campus}</p>
                        <p>{student.Name}</p>
                    </div>  
            
                </div>
            </div>       
        </div>

        
    );
}

export default StudentInfoDiv;
