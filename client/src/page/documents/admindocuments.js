import React, { useState, useEffect } from "react";
import axios from "axios";
import Cookies from "js-cookie";

import AdminDocTable from "../../components/admindoctable";
import DocModalEdit from "../../components/docmodaledit";
import { MdPodcasts } from "react-icons/md";
/*<button className="absolute right-0 transform -translate-y-5 object-none mb-5 w-12 h-12 flex items-center justify-center rounded-full bg-green-600 hover:bg-green-700 focus:ring-green-500 focus:ring-offset-green-200 text-white hover:scale-110 transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 ">
					<BsFileEarmarkPlusFill className="h-full w-6/12 fill-white-600" />
				</button>*/
//Fetching documents from backend
function AdminDocuments() {
	var user;

	const [documents, setDocuments] = useState([]);

	//Getting document list from database
	const getDocuments = async () => {
		try {
			const response = await axios.get("/document/list");
			const jsonData = await response.data;

			console.log(jsonData);

			setDocuments(jsonData);
		} catch (err) {
			console.error(err.message);
		}
	};

	useEffect(() => {
		getDocuments();
	}, []);

	const resetDocuments = async () => {
		try {
			const resetDocuments = await axios.put(`/document/reset`);
		} catch (err) {
			console.error(err.message);
		}
	};

	function generateClick() {
		resetDocuments();
		setTimeout(() => {
			window.location.reload();
		}, 500);
	}

	let editModals = documents.map((doc) => {
		return (
			<DocModalEdit
				key={doc._id}
				docId={doc._id}
				name={doc.name}
				description={doc.description}
				pfUrl={doc.powerFormUrl}
				isActive={doc.isActive}
			/>
		);
	});

	if (!Cookies.get("userCookie")) {
		window.location.replace("/login?redirectLocation=admindocuments");
	} else if (documents.length != 0) {
		user = JSON.parse(Cookies.get("userCookie"));
		return (
			<div className="h-full w-screen flex justify-center">
				<div className="flex-col w-8/12 h-full">
					<AdminDocTable />
				</div>
				{editModals}
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
							It looks like there currently aren't any documents saved in your
							database. Push the button below to populate your document list
							with some samples.
						</p>
						<div className="flex justify-center">
							<button
								type="button"
								onClick={generateClick}
								className="inline-block px-6 py-2.5 bg-stone-500 text-white font-medium text-xs leading-tight rounded shadow-md hover:bg-stone-600 hover:shadow-lg focus:bg-stone-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-stone-700 active:shadow-lg"
							>
								Generate Sample Documents
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default AdminDocuments;
