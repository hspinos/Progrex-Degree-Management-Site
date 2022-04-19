import Badge from "../../components/badge";
import ProgressBar from "../../components/progressbar";
import GameBoard from "../../components/gameBoard";

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
							<Badge />
						</div>
					</div>
					<div className="border-4 rounded-md p-4 flex-auto ">
						<div className="w-11/12 space-y-4 m-auto">
							<h1 className="text-6xl font-semibold">Progress</h1>
							<ProgressBar progressPercentage={25} />
							<ProgressBar progressPercentage={50} />
							<ProgressBar progressPercentage={75} />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
