import ProgressBar from "../../components/progressbar"
export default function UserDash() {
  let badgesList = [
    {
      name: "badge 1",
      desc: "Ipsum nostrud anim ad incididunt cupidatat ut aliqua excepteur consequat.",
      id: 1,
    },
    {
      name: "badge 2",
      desc: "Ipsum nostrud anim ad incididunt cupidatat ut aliqua excepteur consequat.",
      id: 2,
    },
    {
      name: "badge 3",
      desc: "Proident aute cillum mollit deserunt eiusmod Lorem duis incididunt velit sint.",
      id: 3,
    },
    {
      name: "badge 4",
      desc: "Pariatur quis consequat consequat amet culpa incididunt aute elit consequat.",
      id: 4,
    },
    {
      name: "Badge 5",
      desc: "Do non ullamco laboris deserunt enim aliquip pariatur aute voluptate nulla consequat.",
      id: 5,
    },
  ];

  let badges = badgesList.map((item) => {
    return (
      <div key={item.id} className=" h-24 border-2 rounded-md">
        <div className="flex flex-row items-center h-full p-2 space-x-5">
          <div className="w-12 bg-gray-300 h-12 rounded-full "></div>
          <div className="flex flex-col space-y-3">
            
            <div className="">{item.name}</div>
            <div className="">{item.desc}</div>
          </div>
        </div>
      </div>
    );
  });
  return (
    <div className="flex h-full justify-center align-center">
      <div className="grid grid-cols-2 w-full h-full">
        <div className="flex items-center">
          <div className="text-5xl font-semibold">gameboard div</div>
        </div>
        <div className="flex flex-col items-stretch justify-center space-y-2">
          <div className="border-4 rounded-md p-4 flex-auto overflow-y-auto">
            <div className="w-11/12 space-y-4 m-auto">
              <h1 className="text-6xl font-semibold">Badges</h1>
              {/* <div className=" h-24 border-2 rounded-md">
                <div className="flex flex-row items-center h-full p-2 space-x-5">
                  <div className="w-12 bg-gray-300 h-12 rounded-full "></div>
                  <div className="flex flex-col space-y-3">
                    <div className="w-36 bg-gray-300 h-6 rounded-md "></div>
                    <div className="w-24 bg-gray-300 h-6 rounded-md "></div>
                  </div>
                </div>
              </div> */}
              {badges}
            </div>
          </div>
          <div className="border-4 rounded-md p-4 flex-auto ">
            <div className="w-11/12 space-y-4 m-auto">
              <h1 className="text-6xl font-semibold bg-black">Progress</h1>{/*
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
