import React, { useState, useEffect } from "react";
import axios from "axios";

function AddStudentModal(props) {
	var corName = document.getElementById(`courseName${props.courseId}`);
    var studId;
    var studGrade;

    const[corseName, setName] = useState("");
    const[student, setStudent] = useState([]);
    const getStudents = async () =>{
        try{
            const response = await axios.get(`/user/list/`)
            const studentData = await response.data;

            console.log(studentData);
            setStudent(studentData);
        }catch (err){
            console.error(err.message);
        }
    };

    useEffect(() => {
        getStudents();
    }, []);


    let studs = student.map((stud) => {
        return(
            <option value={stud._id}>{stud.lName}, {stud.fName}</option>
        );
        
    })


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
        let studentUpdate;
        console.log(studId)
        console.log(studGrade)
		let studUpdateData;
		if (studId) studUpdateData["studentId"] = studId;
		if (studGrade) studUpdateData["grade"] = studGrade;
        try{
            let res = await axios.put(`/course/student/${props.courseId}/${studId}`, studUpdateData);
            
            console.log(res);
            window.location.reload();
        }catch (err) {
            alert("Error! Student is already in this course");
            console.error(err);
        }
	}

	//Clears inputs on cancel
	function handleCancel() {
		corName.value = props.courseName;
		
	}

	return (
		<div
			className="modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto"
			id={`addStudent${props.courseId}`}
			data-bs-keyboard="false"
			data-bs-backdrop="static"
			tabIndex="-1"
			aria-labelledby={`addStudent${props.courseId}`}
			aria-hidden="true"
		>
			<div className="modal-dialog modal-dialog-centered relative w-auto pointer-events-none">
				<div className="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current dark:bg-stone-800">
					<div className="modal-header flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-200 rounded-t-m dark:border-stone-700">
						<h5
							className="text-xl font-medium leading-normal text-gray-800 dark:text-white"
							id="editModalTitle"
						>
							Add Student to {props.courseName}
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
							className="grid grid-cols-2 justify-center items-center"
							onSubmit={handleSaveClick}>
                            <div>
                            <div class="">
                                <div class="mb-3 xl:w-70">
                                    <select class="form-select appearance-none
                                    block
                                    w-full
                                    px-3
                                    py-1.5
                                    text-base
                                    font-normal
                                    text-gray-700
                                    bg-white bg-clip-padding bg-no-repeat
                                    border border-solid border-gray-300
                                    rounded
                                    transition
                                    ease-in-out
                                    m-0
                                    focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" aria-label="Default select example" onChange={(event) => studId = event.target.value}>
                                        <option selected> Select A Student</option>
                                        {studs}
                                    </select>
                                </div>
                                <div class="">
                                    <div class="mb-3 xl:w-24">
                                        <select class="form-select appearance-none
                                        block
                                        w-full
                                        px-1
                                        py-1.5
                                        text-base
                                        font-normal
                                        text-gray-700
                                        bg-white bg-clip-padding bg-no-repeat
                                        border border-solid border-gray-300
                                        rounded
                                        transition
                                        ease-in-out
                                        m-0
                                        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" aria-label="Default select example" onChange={(event) => studGrade = event.target.value}>
                                            <option selected>Grade</option>
                                            <option value="A">A</option>
                                            <option value="B">B</option>
                                            <option value="C">C</option>
                                            <option value="D">D</option>
                                            <option value="F">F</option>
                                        </select>
                                    </div>
                                    </div>
                            </div>
								<div className="grid">
									<style>{toggleStyle}</style>
								</div>
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

export default AddStudentModal;
