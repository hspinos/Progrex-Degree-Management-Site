import React, { useState, useEffect } from "react";
import axios from "axios";
import { BsFileEarmarkPlusFill } from "react-icons/bs";


function AdminCourseTable() {
    var courseIndex = 0;

	const [course, setCourses] = useState([]); //

	//Getting document list from database
	const getCourses = async () => {
		try {
			const response = await axios.get("/course/list");
			const jsonData = await response.data;

			console.log(jsonData);

			setCourses(jsonData);
		} catch (err) {
			console.error(err.message);
		}
	};

	useEffect(() => {
		getCourses();
	}, []);

	let corRow = course.map((cor) => {
		var rowColor;

		if (courseIndex++ % 2 == 0) {
			rowColor = "dark:bg-stone-700";
		} else {
			rowColor = "dark:bg-stone-600";
		}
		return (
			<tr className={`bg-white ${rowColor} `} key={cor._id}>
				<th
					scope="row"
					className="px-2 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
				>
					{cor.courseName}
				</th>
				<th scope ="row" className="px-2 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
					{cor.usersTaken.length}
				</th>
				<th scope="row" className="px-2 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
					{cor.courseRan}
				</th>
				<th scope="row" className="px-2 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
					{cor.credits}
				</th>
				<td className="px-2 py-4 text-right">
					<div className="grid grid-cols-2">
						<button
							data-bs-toggle="modal"
							data-bs-target={`#editModal${cor._id}`}
							className=" w-fit px-4 h-full whitespace-nowrap bg-green-600 hover:bg-green-700 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none rounded-lg "
						>
							Edit
						</button>
						<button
							data-bs-toggle="modal"
							data-bs-target={`#deleteModal${cor._id}`}
							className="px-1 py-1 w-fit h-full whitespace-nowrap bg-red-600 hover:bg-red-700 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none rounded-lg "
						>
							Delete
						</button>
						
					</div>
				</td>
				<th scope="row" >
					<button 
						data-bs-toggle="modal"
						data-bs-target={`#addStudent${cor._id}`}
						class="text-white bg-green-600 hover:bg-green-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2"
						>
						Add Student
					</button>
				</th>
				<td></td>
			</tr>
		);
	});

	return (
		<div className="mt-10 relative  shadow-md sm:rounded-lg h-full overflow-visible">
			<table className="w-full text-sm text-center text-gray-500 dark:text-gray-50">
				<thead className="text-xs text-white-700 uppercase bg-white-50 dark:bg-white-700 dark:text-white-400 dark:bg-stone-800">
					<tr>
						<th scope="col" className="px-2 py-4">
							Name
						</th>
						<th scope="col" className="px-2 py-4">
							Students
						</th>
						<th scope="col" className="px-2 py-4">
							Course Subject
						</th>
						<th scope="col" className="px-2 py-4">
							Credits
						</th>
						<th scope="col" className="px-2 py-4">
							Options
						</th>
						<th scope="col" className="px-2 py-4">
							Students
						</th>
						<th
							scope="col"
							className="relative h-full flex items-center justify-end py-3"
						>
							<button
								data-bs-toggle="modal"
								data-bs-target="#newModal"
								className="absolute object-none mb-5 w-12 h-12 flex items-center justify-center rounded-full bg-green-600 hover:bg-green-700 focus:ring-green-500 focus:ring-offset-green-200 text-white hover:scale-110 transition ease-in duration-200 text-center text-base font-semibold shadow-md"
							>
								<BsFileEarmarkPlusFill className="h-full w-6/12 fill-white-600" />
							</button>
						</th>
					</tr>
				</thead>
				<tbody>{corRow}</tbody>
			</table>
		</div>
	);
}
export default AdminCourseTable;