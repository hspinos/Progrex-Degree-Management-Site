import React, { useState, useEffect } from "react";
import axios from "axios";
import { RiAlertFill } from "react-icons/ri";

function DocModalDel(props) {
	//Handles clicking save
	async function handleDeleteClick(e) {
		e.preventDefault();
		try {
			let res = await axios.delete(`/document/delete/${props.docId}`);
			console.log(res);
			window.location.reload();
		} catch (err) {
			console.error(err);
		}
	}

	return (
		<div
			className="modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto"
			id={`deleteModal${props.docId}`}
			data-bs-keyboard="false"
			data-bs-backdrop="static"
			tabIndex="-1"
			aria-labelledby={`deleteModal${props.docId}`}
			aria-hidden="true"
		>
			<div className="modal-dialog modal-dialog-centered relative w-auto pointer-events-none">
				<div className="modal-content relative flex items-center flex-col w-full pointer-events-auto bg-clip-padding rounded-md outline-none text-current">
					<div class="relative p-4 w-full max-w-md h-full md:h-auto">
						<div class="relative bg-white rounded-lg shadow dark:bg-stone-800">
							<div class="flex justify-end p-2">
								<button
									type="button"
									class="text-gray-400 bg-transparent hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:text-white"
									data-bs-dismiss="modal"
								>
									<svg
										class="w-5 h-5"
										fill="currentColor"
										viewBox="0 0 20 20"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											fill-rule="evenodd"
											d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
											clip-rule="evenodd"
										></path>
									</svg>
								</button>
							</div>

							<div class="p-6 pt-0 text-center">
								<RiAlertFill className="mx-auto mb-4 w-24 h-24 fill-red-600" />
								<h3 class="mb-5 text-lg font-normal text-gray-500 dark:text-white">
									Are you sure you want to delete {props.name}?
								</h3>
								<button
									data-modal-toggle="popup-modal"
									type="button"
									onClick={handleDeleteClick}
									class="text-white bg-red-600 hover:bg-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2"
								>
									Delete
								</button>
								<button
									type="button"
									data-bs-dismiss="modal"
									aria-label="Close"
									class="mx-5 w-fit px-4 h-10 whitespace-nowrap  bg-stone-500 hover:bg-stone-600 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none rounded-lg"
								>
									Cancel
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default DocModalDel;
