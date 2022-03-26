import React from 'react';
import Cookies from 'js-cookie';

function AdminDocumentCard(props) {

    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg rounded-md bg-stone-800">
            <div className="px-6 py-4">
                <div className="flex flex-shrink-0 items-center justify-between ">
                <div className="font-bold text-xl mb-2">{props.name}</div>
                <button type="button"
                            className="btn-close box-content w-4 h-4 p-1 text-white border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-white hover:opacity-75 hover:no-underline"
                            data-bs-dismiss="modal" aria-label="Close">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="x"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                        </button>
                        </div>
                <p className="text-white text-base">
                    {props.desc}
                </p>
            </div>
            <div className="px-6 pt-4 pb-2 flex items-center justify-center">
                <button className="py-2 px-4 mx-5 bg-gray-600 hover:bg-gray-700 focus:ring-green-500 focus:ring-offset-green-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">View Signers</button>
               
            </div>
        </div>
    );
}

export default AdminDocumentCard;