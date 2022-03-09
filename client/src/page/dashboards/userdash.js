import Badge from "../../components/badge";

export default function UserDash() {
  
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
              {<Badge/>}
            </div>
          </div>
          <div className="border-4 rounded-md p-4 flex-auto ">
            <div className="w-11/12 space-y-4 m-auto">
              <h1 className="text-6xl font-semibold">Progress</h1>
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
