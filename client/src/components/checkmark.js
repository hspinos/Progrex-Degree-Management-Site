import axios from "axios";
import React, {useEffect, useState } from "react";
import Cookies from "js-cookie";

function CheckMark(props) {
    var user;
    const [grade, setGrade] = useState("");
    const [student, setStudent] = useState("");
    const getStudent = async () => {
        try{
            const response = await axios.get(`/course/student/${props.id}/${user.id}`)
            const studentResponse = await response.data;

            

            setGrade(studentResponse);
            console.log(studentResponse);
        }catch(err){
            console.error(err.message);
        }
    };

    useEffect(() => {
        getStudent();
      }, []);



     //Defining user that is logged in
     if (Cookies.get('userCookie')) {
        user = JSON.parse(Cookies.get('userCookie'));
    }

    if(grade.grade == null){
        return(
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="none" stroke="red">
            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd" />
            </svg>
            
        )
        } else{
            return(
                <svg class="w-6 h-6 dark:text-white" fill="none" stroke="#2BB673" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
            )
        }
    

}
export default CheckMark;