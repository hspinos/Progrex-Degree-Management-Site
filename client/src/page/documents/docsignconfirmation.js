import React from "react";
import { useLocation } from "react-router-dom";
import Cookies from 'js-cookie';
import axios from 'axios';

function DocSignConfirmation() {
    var user;

    //Getting data from URL parameters
    const search = useLocation().search;
    const documentName = new URLSearchParams(search).get('docName');
    const documentId = new URLSearchParams(search).get('docId');
    const userId = new URLSearchParams(search).get('userId');

    //Fetching document that was signed
    const updateSignedStatus = async () => {
        try {
            const updateSignedStatus = await axios.put(`/document/sign/${documentId}/${userId}`);
        } catch (err) {
            console.error(err.message);
        }
    }

    //Hiding URL parameters from user
    function obscureUrl() {
        let stateObj = { id: "100" };

        window.history.pushState(stateObj, "Hidden Url", "/docsignconfirmation");
    }

    //Calling status updating function and obscuring URL
    if (documentId != null) {
        updateSignedStatus()
        obscureUrl()
    };

    //Defining user that is logged in
    if (Cookies.get('userCookie')) {
        user = JSON.parse(Cookies.get('userCookie'));
    }

    return (
        <div className="h-full flex justify-center">
            <div className="flex items-center w-screen grid place-items-center h-screen">
                <div className="bg-stone-800 items-center p-4 w-1/3 rounded overflow-hidden shadow-lg rounded-md">
                    <h1 className="text-3xl text-center font-semibold mb-4">Thank you for signing, {user.fName}!</h1>
                    <div className="items-center p-4 border-t h-fit border-gray-200 rounded-t-m dark:border-stone-700">
                        <p>{documentName} has successfully been signed. A copy of the signed document has been sent to your email.</p>
                        <div className="m-14 flex grid place-items-center">
                            <img src="assets/vectors/sign_success.svg" className="mr-3 h-fit sm:h-64" alt="sign success" />
                        </div>
                        <div className="flex justify-end">
                            <a type="button" href="userdocuments"
                                className="inline-block px-6 py-2.5 bg-stone-500 text-white font-medium text-xs leading-tight rounded shadow-md hover:bg-stone-600 hover:shadow-lg focus:bg-stone-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-stone-700 active:shadow-lg">Return to Documents</a>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default DocSignConfirmation;