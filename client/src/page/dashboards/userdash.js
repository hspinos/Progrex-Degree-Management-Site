export default function UserDash() {
  return (
    <div className="flex h-full justify-center align-center">
      <div className="grid grid-cols-2 w-full h-full">
        <div className="flex items-center">
          <div className="text-5xl font-semibold">gameboard div</div>
        </div>
        <div className="flex flex-col justify-center space-y-2">
          <div className="border-4 rounded-md p-4">
            <h1 className="text-6xl font-semibold">Badges</h1>
            <div className="">

            </div>
          </div>
          <div className="border-4 rounded-md p-4">
            <h1 className="text-6xl font-semibold">Progress</h1>
            <div className="">

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}