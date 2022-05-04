import React, { useState, useEffect } from "react";
import axios from "axios";

function SignerName(props) {
	const [signerName, setSignerName] = useState();

	const getSignerData = async () => {
		try {
			let response = await axios.get(`/user/detail/${props.userId}`);
			const jsonData = await response.data;

			setSignerName(jsonData.fName + " " + jsonData.lName);
		} catch (err) {
			console.error(err.message);
		}
	};

	useEffect(() => {
		getSignerData();
	}, []);

	return <p>{signerName}</p>;
}

export default SignerName;
