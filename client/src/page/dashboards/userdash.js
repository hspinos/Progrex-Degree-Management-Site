import Badge from "../../components/badge";
import ProgressBar from "../../components/progressbar";
import GameBoard from "../../components/gameBoard";
import Sidebar from "../../components/sidebar";
import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import axios from "axios";






  
export default function UserDash() {

  var user;
  var progress;
  
  if (!Cookies.get('userCookie')) {
    window.location.replace('/login?redirectLocation=userdash');
  }

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

  progress = parseInt(student.credits);
  console.log(student.credits);
  if(progress === 0 ){
    console.log();
  }else {
    progress = ((progress)/30)*100;
    progress = Math.trunc(progress);
    console.log(student.progress);
  }
  
  

 
  
  return (
    <div className="flex justify-around items-center  m-auto">
      <div className="flex flex-col md:flex-row mt-4 m-auto justify-between space-x-3">
        <div className="flex-grow">
          <GameBoard />
        </div>

        <div className="flex flex-col items-center justify-center space-y-2">
          <div className="h-3/5 rounded-md flex-auto overflow-y-scroll lg:w-96 overflow-x-hidden bg-stone-800 scrollbar-thin scrollbar-thumb-green-700 scrollbar-track-gray-300 scrollbar-thumb-rounded scrollbar-track-rounded">
            <div className="w-full p-8 space-y-4 m-auto text-center">
              <h1 className="text-5xl font-semibold lg:w-40">Badges</h1>

              <table>
                <Badge />
              </table>
  
            </div>
          </div>
          <div className="w-full h-2/5 rounded-md p-4 flex-auto bg-stone-800">
            <div className="w-11/12 space-y-4 m-auto">
              <h1 className="text-5xl font-semibold">Progress</h1>
              <ProgressBar progressPercentage={progress}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
