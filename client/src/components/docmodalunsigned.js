import React from "react";

function DocModalUnsigned() {
    return (
        <div className="modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto"
            id="unsignedModal" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1"
            aria-labelledby="unsignedModal" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered relative w-auto pointer-events-none">
                <div
                    className="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current dark:bg-stone-800">
                    <div
                        className="modal-header flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-200 rounded-t-m dark:border-stone-700">
                        <h5 className="text-xl font-medium leading-normal text-gray-800 dark:text-white" id="unsignedModalTitle">
                            Modal title
                        </h5>
                        <button type="button"
                            className="btn-close box-content w-4 h-4 p-1 text-white border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-white hover:opacity-75 hover:no-underline"
                            data-bs-dismiss="modal" aria-label="Close">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                        </button>
                    </div>
                    <div className="modal-body relative p-4" id="unsignedModalBody">
                        ...
                    </div>
                    <div
                        className="modal-footer flex flex-shrink-0 flex-wrap items-center justify-end p-4 border-t border-gray-200 rounded-b-md dark:border-stone-700">
                        <button type="button"
                            className="inline-block px-6 py-2.5 bg-stone-500 text-white font-medium text-xs leading-tight rounded shadow-md hover:bg-stone-600 hover:shadow-lg focus:bg-stone-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-stone-700 active:shadow-lg transition duration-150 ease-in-out"
                            data-bs-dismiss="modal">Close</button>
                        <button type="button" id='signButton' data-bs-dismiss="modal"
                            className="inline-block px-6 py-2.5 bg-red-500 text-white font-medium text-xs leading-tight rounded shadow-md hover:bg-red-600 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out ml-1">Sign Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DocModalUnsigned;