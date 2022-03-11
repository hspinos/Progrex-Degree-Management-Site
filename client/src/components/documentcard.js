import React from 'react';
import Cookies from 'js-cookie';


function DocumentCard(props) {

    var isSigned;
    var modal;

    function handleCardClick() {
        if (props.isSigned) {
            document.getElementById('signedModalTitle').textContent = props.name;
            document.getElementById('signedModalBody').textContent = props.desc;
        } else {
            document.getElementById('unsignedModalTitle').textContent = props.name;
            document.getElementById('unsignedModalBody').textContent = props.desc;
            document.getElementById('signButton').onclick = openPowerForm;
        }
    }

    function openPowerForm() {
        let powerFormUrl = props.pfUrl;
        let powerFormQuery = (`&signer_UserName=${Cookies.get('userCookie')}&signer_Email=${Cookies.get('userCookie')}@noemail.example.com&fname=${Cookies.get('userCookie')},`)
        let queriedUrl = powerFormUrl + powerFormQuery;
        window.open(queriedUrl);
    }

    if (props.isSigned) {
        isSigned = <span className="inline-block bg-green-400 rounded-full px-3 py-1 text-sm font-semibold mr-2 mb-2">Completed</span>;
        modal = "#signedModal";
    } else {
        isSigned = <span className="inline-block bg-red-500 rounded-full px-3 py-1 text-sm font-semibold mr-2 mb-2">Action Needed</span>;
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
                {isSigned}
            </div>
        </div>
    );
}

export default DocumentCard;