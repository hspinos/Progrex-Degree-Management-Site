import Badge from "../../components/badge";
import ProgressBar from "../../components/progressbar"
import GameBoard from "../../components/gameBoard";
import Sidebar from "../../components/sidebar";

// export default function UserDash() {
//   let badgesList = [
//     {
//       name: "badge 1",
//       desc: "Ipsum nostrud anim ad incididunt cupidatat ut aliqua excepteur consequat.",
//       id: 1,
//     },
//     {
//       name: "badge 2",
//       desc: "Ipsum nostrud anim ad incididunt cupidatat ut aliqua excepteur consequat.",
//       id: 2,
//     },
//     {
//       name: "badge 3",
//       desc: "Proident aute cillum mollit deserunt eiusmod Lorem duis incididunt velit sint.",
//       id: 3,
//     },
//     {
//       name: "badge 4",
//       desc: "Pariatur quis consequat consequat amet culpa incididunt aute elit consequat.",
//       id: 4,
//     },
//     {
//       name: "Badge 5",
//       desc: "Do non ullamco laboris deserunt enim aliquip pariatur aute voluptate nulla consequat.",
//       id: 5,
//     },
//   ];

export default function UserDash() {
  
  return (
    <div className="flex justify-around items-center w-full m-auto">
      <div className="flex flex-col md:flex-row mt-4 m-auto justify-between space-x-3">
        <div className="flex-grow">

          <GameBoard />
          <div>Current User Info</div>
        </div>


        <div className="flex flex-col items-center justify-center space-y-2">
          <div className=" rounded-md flex-auto overflow-y-auto bg-stone-800">
            <div className="w-full p-8 space-y-4 m-auto text-center">
              <h1 className="text-3xl font-semibold uppercase">Badges</h1>
              {/* <div className=" h-24 border-2 rounded-md">
                <div className="flex flex-row items-center h-full p-2 space-x-5">
                  <div className="w-12 bg-gray-300 h-12 rounded-full "></div>
                  <div className="flex flex-col space-y-3">
                    <div className="w-36 bg-gray-300 h-6 rounded-md "></div>
                    <div className="w-24 bg-gray-300 h-6 rounded-md "></div>
                  </div>
                </div>
              </div> */}
              {/* <Sidebar/> */}
              <Badge/>
            </div>
          </div>
          <div className="border-4 rounded-md p-4 flex-auto ">
            <div className="w-11/12 space-y-4 m-auto">
              <h1 className="text-6xl font-semibold">Progress</h1>{/*
              <div className=" h-24 border-2 rounded-md">
                <div className="flex flex-row items-center h-full p-2 space-x-5">
                  <div className="w-12 bg-gray-300 h-12 rounded-full "></div>
                  <div className="flex flex-col space-y-3">
                    <div className="w-36 bg-gray-300 h-6 rounded-md ">
                      hello
                      
                    </div>
                    <div className="w-24 bg-gray-300 h-6 rounded-md "></div>
                  </div>
                </div>
              </div>*/}
              <ProgressBar progressPercentage={25}/>
              <ProgressBar progressPercentage={50}/>
              <ProgressBar progressPercentage={75}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
