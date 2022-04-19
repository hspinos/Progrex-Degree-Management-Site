import axios from "axios";
import React, {useEffect, useState } from "react";
import Cookies from "js-cookie";

function GradeCard(props) {
    var user;
    const [grade, setGrade] = useState([]);
    const [student, setStudent] = useState([]);
    const getStudent = async () => {
        try{
            const response = await axios.get(`/course/student/${props.id}/${user.id}`)
            const studentResponse = await response.data;

            console.log(studentResponse);

            setStudent(studentResponse.isTaken);
            if(studentResponse.isTaken) setGrade(studentResponse.grade);
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

    return(
        <td class="px-6 py-4">
            {grade}
        </td>
        
    )
}
export default GradeCard;