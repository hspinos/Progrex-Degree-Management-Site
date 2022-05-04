import React, { useState, useEffect } from "react";
import axios from "axios";
import Cookies from "js-cookie";

import CorModalEdit from "../../components/cormodaledit";
import CorModalDel from "../../components/cormodaldel";
import AdminCourseTable from "../../components/admincoursetable";
import CorModalNew from "../../components/cormodalnew";
import AddStudentModal from "../../components/addstudentmodal";



//Fetching documents from backend
function AdminProgress() {
	var user;

	const [courses, setCourses] = useState([]);

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

	const resetCourses = async () => {
		try {
			const resetDocuments = await axios.put(`/course/reset`);
		} catch (err) {
			console.error(err.message);
		}
	};

	function generateClick() {
		resetCourses();
		window.location.reload();
		setTimeout(() => {
			window.location.reload();
		}, 500);
	}

	function Alert(props) {
		return (
			<div
				class="p-4 mb-4 text-sm text-green-700 bg-green-100 rounded-lg dark:bg-green-200 dark:text-green-800"
				role="alert"
			>
				<span class="font-medium">Success alert!</span> Change a few things up
				and try submitting again.
			</div>
		);
	}

	let editModals = courses.map((cor) => {
		return (
			<React.Fragment>
				<CorModalEdit
					key={cor._id}
					courseId={cor._id}
					courseName={cor.courseName}
					credits={cor.credits}
                    courseRan={cor.courseRan}
				/>
				<CorModalDel courseId={cor._id} courseName={cor.courseName}/>
                <AddStudentModal
                    key={cor._id}
					courseId={cor._id}
					courseName={cor.courseName}
					credits={cor.credits}
					pos={cor.position}
                    />
			</React.Fragment>
		);
	});

	if (!Cookies.get("userCookie")) {
		window.location.replace("/login?redirectLocation=adminprogress");
	} else if (courses.length != 0) {
		user = JSON.parse(Cookies.get("userCookie"));
		console.log(user);
		return (
			<div className="h-full w-screen flex justify-center">
				<div className="flex-col w-8/12 h-full">
					<AdminCourseTable />
				</div>
				{editModals}
				<CorModalNew/>
			</div>
		);
	}
	return (
		<div className="h-full flex justify-center">
			<div className="flex items-center w-screen grid place-items-center h-screen">
				<div className="bg-stone-800 items-center p-4 w-1/3 rounded overflow-hidden shadow-lg rounded-md">
					<h1 className="text-3xl text-center font-semibold mb-4">Uh oh...</h1>
					<div className="items-center p-4 border-t h-fit border-gray-200 rounded-t-m dark:border-stone-700">
						<p>
							It looks like there currently aren't any courses saved in your
							database. Push the button below to populate your document list
							with some samples.
						</p>
						<div className="flex justify-center">
							<button
								type="button"
								onClick={generateClick}
								className="inline-block px-6 py-2.5 bg-stone-500 text-white font-medium text-xs leading-tight rounded shadow-md hover:bg-stone-600 hover:shadow-lg focus:bg-stone-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-stone-700 active:shadow-lg"
							>
								Generate Sample Courses
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default AdminProgress;
