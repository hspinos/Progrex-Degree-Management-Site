import React, { useState } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import { Redirect, useHistory } from "react-router-dom";

const Login = (props) => {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");

	var redirectLocation = "home";

	let history = useHistory();

	const search = useLocation().search;
	if (new URLSearchParams(search).get("redirectLocation"))
		redirectLocation = new URLSearchParams(search).get("redirectLocation");

	async function handleLoginClick(e) {
		e.preventDefault();
		try {
			console.log(username)
			let res = await axios.post(
				`/user/login`,
				{
					username: username,
					password: password,
				},
				{
					headers: {
						"Content-Type": "application/json",
					},
					withCredentials: true,
				}
			);
			console.log("Hello console!");
			if (res.status == 200) {
				console.log("login successful!");
				setTimeout(() => {
					props.handleAuth()
					history.push("/userdash")
				}, 500)
			}
		} catch (err) {
			console.error(err);
		}
	}

	return (
		<div className="mt-24 h-full flex justify-center">
			<div className="flex items-center">
				<div className="bg-gray-300 rounded-lg shadow sm:max-w-md sm:w-full sm:mx-auto sm:overflow-hidden dark:bg-stone-800 rounded-md">
					<div className="px-4 py-8 sm:px-10">
						<div className="relative mt-6">
							<div className="absolute inset-0 flex items-center">
								<div className="w-full border-t border-gray-300"></div>
							</div>
							<div className="relative flex justify-center text-sm leading-5">
								<span className="px-2 text-gray-500 bg-gray-300 rounded text-lg">
									Login
								</span>
							</div>
						</div>
						<div className="mt-6">
							<div className="w-full space-y-6">
								<form
									className="grid grid-cols-1 justify-center items-center"
									onSubmit={handleLoginClick}
								>
									<div className="grid mb-2">
										<input
											type="text"
											id="username"
											name="username"
											className="mb-3 rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 focus:ring-green-500 bg-gray-300 text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2  focus:border-transparent"
											placeholder="Username"
											onChange={(e) => {
												setUsername(e.target.value);
											}}
										/>
									</div>
									<div className="grid mb-2">
										<input
											type="password"
											id="password"
											name="password"
											className="mb-3 rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 focus:ring-green-500 bg-gray-300 text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:border-transparent"
											placeholder="Password"
											onChange={(e) => setPassword(e.target.value)}
										/>
									</div>
									<button
										className="py-2 px-4  bg-green-600 hover:bg-green-700 focus:ring-green-500 focus:ring-offset-green-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg"
										onClick={handleLoginClick}
									>
										Login
									</button>
								</form>
							</div>
						</div>
					</div>
					<div className="px-4 py-6 border-t-2 border-gray-400  sm:px-10">
						<p className="text-xs leading-5 text-gray-500">
							By clicking "login" you agree to{" "}
							<a href="terms">
								{" "}
								<i>terms</i>
							</a>{" "}
							and{" "}
							<a href="#">
								<i>conditions</i>
							</a>
							.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Login;
