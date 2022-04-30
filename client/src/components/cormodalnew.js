import React, { useState, useEffect } from "react";
import axios from "axios";


function CorModalNew(props) {
	var isActive = true;
	var corNameBody = document.getElementById(`courseName`);
	var corRanBody = document.getElementById(`courseRan`);
	var corCreditBody = document.getElementById(`credits`);

	const [corName, setName] = useState("");
	const [corCredits, setCredits] = useState("");
	const [corRan, setRan] = useState("");

	//Active switch styling
	const toggleStyle = `
	input:checked ~ .dot {
		transform: translateX(100%);
	
	  }
	  input:checked ~ .block {
		background-color: #4ade80;
	  }

	`;

	//Handles clicking save
	async function handleSaveClick(e) {
		e.preventDefault();
		console.log(corName, corCredits, corRan);
		let newCourse = {
			courseName: corName,
			credits: corCredits,
			courseRan: corRan,
		};
		console.log(newCourse);
		try {
			let res = await axios.post("/course/create", newCourse);
			console.log(res);
			window.location.reload();
		} catch (err) {
			console.error(err);
		}
	}

	//Clears inputs on cancel
	function handleCancel() {
		corNameBody.value = "";
		corCreditBody.value = "";
		corRanBody.value = "";
	}

	return (
		<div
			className="modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto"
			id={`newModal`}
			data-bs-keyboard="false"
			data-bs-backdrop="static"
			tabIndex="-1"
			aria-labelledby={`newModal`}
			aria-hidden="true"
		>
			<div className="modal-dialog modal-dialog-centered relative w-auto pointer-events-none">
				<div className="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current dark:bg-stone-800">
					<div className="modal-header flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-200 rounded-t-m dark:border-stone-700">
						<h5
							className="text-xl font-medium leading-normal text-gray-800 dark:text-white"
							id="editModalTitle"
						>
							New Course
						</h5>
						<button
							type="button"
							className="btn-close box-content w-4 h-4 p-1 text-white border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-white hover:opacity-75 hover:no-underline"
							data-bs-dismiss="modal"
							aria-label="Close"
							onClick={handleCancel}
						>
							<svg
								className="w-5 h-5"
								fill="currentColor"
								viewBox="0 0 20 20"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									fillRule="evenodd"
									d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
									clipRule="evenodd"
								></path>
							</svg>
						</button>
					</div>
					<div className="modal-body relative p-4" id="editModalBody">
						<form
							className="grid grid-cols-1 justify-center items-center"
							onSubmit={handleSaveClick}
						>
							<div className="flex space-x-4 mb-2 w-full">
								<div className="grid w-10/12">
									<label id="courseNameLabel" className="font-semibold mb-1">
										Name
									</label>
									<input
										type="text"
										id={`courseName`}
										name="courseName"
										className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 focus:ring-green-500 bg-gray-200 text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:border-transparent"
										placeholder="Course Title"
										onChange={(e) => setName(e.target.value)}
									/>
								</div>
								<div className="grid">
									<style>{toggleStyle}</style>
								</div>
							</div>
							<div className="grid mb-2">
								<label className="font-semibold">Credits</label>
								<textarea
									className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 focus:ring-green-500 bg-gray-200 text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2  focus:border-transparent"
									id={`courseCredits`}
									name="courseCredits"
									placeholder="The number of Credits for the course"
									rows="1"
									required
									onChange={(e) => {
										setCredits(e.target.value);
									}}
								/>
							</div>
							<div className="grid mb-2">
								<label className="font-semibold">Ran</label>
								<input
									type="text"
									id={`courseRan`}
									name="courseRan"
									className="rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 focus:ring-green-500 bg-gray-200 text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2  focus:border-transparent"
									placeholder="CSCI 0000"
									onChange={(e) => {
										setRan(e.target.value);
									}}
								/>
							</div>
						</form>
					</div>
					<div
						id="editModalFooter"
						className="relative modal-footer flex flex-shrink-0 flex-wrap items-center p-4 border-t border-gray-200 rounded-b-md dark:border-stone-700 justify-end"
					>
						<button
							className="mx-5 w-1/6 px-4 h-10 whitespace-nowrap  bg-stone-500 hover:bg-stone-600 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none rounded-lg"
							data-bs-dismiss="modal"
							aria-label="Close"
							onClick={handleCancel}
						>
							Cancel
						</button>
						<button
							className="w-1/6 px-4 h-10 whitespace-nowrap bg-green-600 hover:bg-green-700 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none rounded-lg"
							onClick={handleSaveClick}
						>
							Save
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default CorModalNew;
