import React from 'react';

function DocumentCard(props) {
    var isSigned;

    function handleCardClick(){
        document.getElementById('modalTitle').textContent=props.name;
        document.getElementById('modalBody').textContent=props.desc;
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