import React from 'react';

function DocumentCard(props) {
    var isSigned;
    var modalFooter;

    function handleCardClick(){
        document.getElementById('modalTitle').textContent=props.name;
        document.getElementById('modalBody').textContent=props.desc;
        switch(props.isSigned) {
            case true:
                document.getElementById('modalFooter').innerHTML = 
                    <div>
                        <p>Date signed:</p>
                    </div>;
               break;
            case false:
                document.getElementById('modalFooter').innerHTML = 
                    <div>
                        <button data-modal-toggle="docModal" type="button" className="text-white bg-red-500 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-red-500 dark:hover:bg-red-600 dark:focus:ring-blue-800">Sign Now</button>
                        <button data-modal-toggle="docModal" type="button" className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:ring-gray-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600">Cancel</button>
                    </div>;
        }
    }

    switch(props.isSigned) {
        case true:
           isSigned = <span className="inline-block bg-green-400 rounded-full px-3 py-1 text-sm font-semibold mr-2 mb-2">Completed</span>;
           break;
        case false:
            isSigned = <span className="inline-block bg-red-500 rounded-full px-3 py-1 text-sm font-semibold mr-2 mb-2">Action Needed</span>;
    }

    return (
        <div onClick={handleCardClick} data-modal-toggle="docModal" className="max-w-sm rounded overflow-hidden shadow-lg rounded-md bg-stone-800">
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