import React, { useState, useEffect } from "react";
import axios from "axios";
import Cookies from "js-cookie";

import AdminDocTable from "../../components/admindoctable";
import DocModalEdit from "../../components/docmodaledit";
import DocModalNew from "../../components/docmodalnew";
import DocModalDel from "../../components/docmodaldel";

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

	let editModals = documents.map((doc) => {
		return (
			<React.Fragment>
				<DocModalEdit
					key={doc._id}
					docId={doc._id}
					name={doc.name}
					description={doc.description}
					pfUrl={doc.powerFormUrl}
					isActive={doc.isActive}
					creator={doc.creator}
				/>
				<DocModalDel docId={doc._id} name={doc.name} />
			</React.Fragment>
		);
	});

	if (!Cookies.get("userCookie")) {
		window.location.replace("/login?redirectLocation=admindocuments");
	} else if (documents.length != 0) {
		user = JSON.parse(Cookies.get("userCookie"));
		console.log(user);
		return (
			<div className="h-full w-screen flex justify-center">
				<div className="flex-col w-8/12 h-full">
					<AdminDocTable />
				</div>
				{editModals}
				<DocModalNew creator={`${user.fName} ${user.lName}`} />
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
