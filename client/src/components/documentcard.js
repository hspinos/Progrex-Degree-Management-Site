import React, { useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import axios from 'axios';

function DocumentCard(props) {

    const [isSigned, setSigned] = useState();
    const [dateSigned, setDateSigned] = useState();
    var modalFooter;
    var modal;
    var user;

    //Determining if document has been signed by the user
    const getSignedStatus = async () => {
        try {
            const response = await axios.get(`/document/sign/${props.id}/${user.id}`);
            const signResponse = await response.data;

            console.log(signResponse);

            setSigned(signResponse.isSigned);
            if (signResponse.isSigned) setDateSigned(signResponse.dateSigned);

        } catch (err) {
            console.error(err.message);
        }
    };

    useEffect(() => {
        getSignedStatus();
      }, []);

    //Handling card click depending on if document has been signed
    function handleCardClick() {
        if (isSigned) {
            document.getElementById('signedModalTitle').textContent = props.name;
            document.getElementById('signedModalBody').textContent = props.desc;
            document.getElementById('signedModalFooter').textContent = "Date Signed: " + new Date(dateSigned).toLocaleDateString();
        } else {
            document.getElementById('unsignedModalTitle').textContent = props.name;
            document.getElementById('unsignedModalBody').textContent = props.desc;
            document.getElementById('signButton').onclick = openPowerForm;
        }
    }

    //Defining user that is logged in
    if (Cookies.get('userCookie')) {
        user = JSON.parse(Cookies.get('userCookie'));
    }

    //Generating and open PowerForm link for selected document
    function openPowerForm() {
        let powerFormUrl = props.pfUrl;
        let signerQuery = (`&signer_UserName=${user.fName}%20${user.lName}&signer_Email=${user.fName}@noemail.example.com`);
        let envelopeQuery = (`&EnvelopeField_docName=${(props.name)}&EnvelopeField_docId=${props.id}&EnvelopeField_userId=${user.id}`);

        let queriedUrl = powerFormUrl + signerQuery + envelopeQuery + `&fname=${user.fName},`;
        window.open(queriedUrl);
    }

    //Indicating which documents have been signed
    if (isSigned) {
        modalFooter = <span className="inline-block bg-green-400 rounded-full px-3 py-1 text-sm font-semibold mr-2 mb-2">Completed</span>;
        modal = "#signedModal";
    } else {
        modalFooter = <span className="inline-block bg-red-500 rounded-full px-3 py-1 text-sm font-semibold mr-2 mb-2">Action Needed</span>;
        modal = "#unsignedModal";
    }

    return (
        <div data-bs-toggle="modal" data-bs-target={modal} onClick={handleCardClick} className="max-w-sm rounded overflow-hidden shadow-lg rounded-md bg-stone-800">
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{props.name}</div>
                <p className="text-white text-base">
                    {props.desc}
                </p>
            </div>
            <div className="px-6 pt-4 pb-2 flex items-center justify-center">
                {modalFooter}
            </div>
        </div>
    );
}

export default DocumentCard;