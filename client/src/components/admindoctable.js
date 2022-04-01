import React, { useState, useEffect } from "react";
import axios from "axios";
import { BsFileEarmarkPlusFill } from "react-icons/bs";
import { AiFillCheckCircle } from "react-icons/ai";
import { MdCancel } from "react-icons/md";
//import AdminDocumentCard from '../../components/admindocumentcard';

//Fetching documents from backend
function AdminDocTable() {
	var documentIndex = 0;

	const [documents, setDocuments] = useState([]); //

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

	function DocStatus(props) {
		console.log(props.isActive);
		if (props.isActive) {
			return (
				<div className="relative grid grid-cols-2 ">
					<AiFillCheckCircle className="absolute h-5 w-5  fill-green-400" />
					<p className="absolute top-1/2 left-0 transform translate-x-6">
						Active
					</p>
				</div>
			);
		}
		return (
			<div className="relative grid grid-cols-2 ">
				<MdCancel className="absolute h-5 w-5  fill-red-500" />
				<p className="absolute top-1/2 left-0 transform translate-x-6">
					Inactive
				</p>
			</div>
		);
	}

	let docRows = documents.map((doc) => {
		var rowColor;

		if (documentIndex++ % 2 == 0) {
			rowColor = "dark:bg-stone-700";
		} else {
			rowColor = "dark:bg-stone-600";
		}

		return (
			<tr className={`bg-white ${rowColor} `} key={doc._id}>
				<th
					scope="row"
					className="px-2 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
				>
					{doc.name}
				</th>
				<td className="px-2 py-4 hover:underline hover:cursor-pointer">
					{doc.usersSigned.length}
				</td>
				<td className="px-2 py-4 flex items-center">
					<DocStatus isActive={doc.isActive} />
				</td>
				<td className="px-2 py-4">{doc.creator}</td>
				<td className="px-2 py-4 text-right">
					<div className="grid grid-cols-2">
						<button
							data-bs-toggle="modal"
							data-bs-target={`#editModal${doc._id}`}
							className=" w-min px-4 h-full whitespace-nowrap bg-green-600 hover:bg-green-700 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none rounded-lg "
						>
							Edit
						</button>
						<button
							data-bs-toggle="modal"
							data-bs-target="#editModal"
							className="px-1 py-1 w-min h-full whitespace-nowrap bg-red-600 hover:bg-red-700 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none rounded-lg "
						>
							Delete
						</button>
					</div>
				</td>
				<td></td>
			</tr>
		);
	});

	return (
		<div className="mt-10 relative  shadow-md sm:rounded-lg h-full overflow-visible">
			<table className="w-full text-sm text-left text-gray-500 dark:text-gray-50">
				<thead className="text-xs text-white-700 uppercase bg-white-50 dark:bg-white-700 dark:text-white-400 dark:bg-stone-800">
					<tr>
						<th scope="col" className="px-2 py-4">
							Name
						</th>
						<th scope="col" className="px-2 py-4">
							Responses
						</th>
						<th scope="col" className="px-2 py-4">
							Status
						</th>
						<th scope="col" className="px-2 py-4">
							Creator
						</th>
						<th scope="col" className="px-2 py-4">
							Options
						</th>
						<th
							scope="col"
							className="relative h-full flex items-center justify-end py-3"
						>
							<button className="absolute object-none mb-5 w-12 h-12 flex items-center justify-center rounded-full bg-green-600 hover:bg-green-700 focus:ring-green-500 focus:ring-offset-green-200 text-white hover:scale-110 transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 ">
								<BsFileEarmarkPlusFill className="h-full w-6/12 fill-white-600" />
							</button>
						</th>
					</tr>
				</thead>
				<tbody>{docRows}</tbody>
			</table>
		</div>
	);
}

export default AdminDocTable;
