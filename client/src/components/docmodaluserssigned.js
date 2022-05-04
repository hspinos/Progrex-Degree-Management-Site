import React, { useState, useEffect } from "react";
import axios from "axios";

import AdminDocSignedTable from "./admindocsignedtable";

function DocModalUsersSigned(props) {
	const [document, setDocument] = useState([]);

	//Getting document from database by id
	const getDocument = async () => {
		try {
			const response = await axios.get(`/document/detail/${props.docId}`);
			const jsonData = await response.data;

			console.log(jsonData);

			setDocument(jsonData);
		} catch (err) {
			console.error(err.message);
		}
	};

	useEffect(() => {
		getDocument();
	}, []);

	console.log(document);

	return (
		<div
			className="modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto"
			id={`signedListModal${props.docId}`}
			data-bs-keyboard="false"
			data-bs-backdrop="static"
			tabIndex="-1"
			aria-labelledby={`signedListModal${props.docId}`}
			aria-hidden="true"
		>
			<div class="modal-dialog relative w-auto pointer-events-none">
				<div class="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current dark:bg-stone-800">
					<div class="modal-header flex flex-shrink-0 items-center justify-between p-4 border-b border-stone-700 rounded-t-md">
						<h5
							className="text-xl font-medium leading-normal text-gray-800 dark:text-white"
							id="editModalTitle"
						>
							{document.name} Signers
						</h5>
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
					</div>
					<div class="modal-body relative p-4">
						<AdminDocSignedTable docId={props.docId} />
					</div>
				</div>
			</div>
		</div>
	);
}

export default DocModalUsersSigned;
