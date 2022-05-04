import React, { useState, useEffect } from "react"
import data from "./mock-studentdata.json"
import Cookies from "js-cookie";
import axios from "axios";




function StudentInfoDiv() {
  var user;
  var isThesis;
  var isGoodStanding;
  var isAppliedToGrad;

  if (Cookies.get('userCookie')) {
    user = JSON.parse(Cookies.get('userCookie'));
  }

  const [student, setStudent] = useState([]);//

  //Getting document list from database
  const getStudent = async () => {
    try {
      const response = await axios.get(`/user/detail/${user.id}`);
      const jsonData = await response.data

      console.log(jsonData);

      setStudent(jsonData);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getStudent();
  }, []);
  if(student.isThesis == true){
    isThesis = "Thesis";
  } else{
    isThesis = "Non-Thesis";
  }

  if(student.isGoodStanding == true){
    isGoodStanding = "Yes";
  } else{
    isGoodStanding = "No";
  }

  if(student.isAppliedToGrad == true){
    isAppliedToGrad = "Yes";
  } else{
    isAppliedToGrad = "No";
  }
  
  return(

      <div className="flex items-center mt-5 mb-10">

      <div className="bg-stone-800 items-center p-4 w-screen rounded-md border-t-8 border-[#2BB673] whitespace-pre">
        <div class="h- p-3">
          <div class="grid grid-cols-3 gap-4 mt-2">
            <div class="h-8 bg-stone-600 rounded border-2 border-stone-400 text-white text-center">{student.studentID}</div>
            <div class="h-8 bg-stone-600 rounded border-2 border-stone-400 text-white text-center">{user.fName}, {user.lName}</div>
            <div class="h-8 bg-stone-600 rounded border-2 border-stone-400 text-white text-center">{student.pathway}</div>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4 mt-3 font-bold">
          <p>Program: {isThesis}</p> 
          <p>Concentration:   {student.pathway}</p>
          <p>Advisor:   Erica Colbert </p>
          <p>GPA:  {student.gpa}</p>
          <p>Acedemic Standing:   {isGoodStanding}</p>
          <p>Applied To Graduate:  {isAppliedToGrad}</p>
          <p>Campus: Statesboro</p>
          <p>Credits: {student.credits}</p>
        </div>
      </div>
    </div>
  )
}
export default StudentInfoDiv;