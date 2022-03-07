import React from "react";

function DocModalUnsigned() {
    return (
        <div id="unsignedModal" aria-hidden="true" className="hidden overflow-y-auto overflow-x-hidden fixed right-0 left-0 top-4 z-50 justify-center items-center md:inset-0 h-modal sm:h-full">
            <div className="relative px-4 w-full max-w-xl h-full md:h-auto">
                <div className="relative bg-white rounded-lg shadow dark:bg-stone-800">
                    <div className="flex justify-between items-start p-5 rounded-t border-b dark:border-stone-700">
                        <h3 id='unsignedModalTitle' className="text-xl font-semibold text-gray-900 lg:text-2xl dark:text-white">
                            Document Name
                        </h3>
                        <button data-modal-toggle="unsignedModal" type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" >
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>  
                        </button>
                    </div>
                    <div className="p-6 space-y-6">
                        <p id='unsignedModalBody' className="text-base leading-relaxed text-gray-500 dark:text-white">
                            Description
                        </p>
                    </div>
                    <div id="modalFooter" className="flex items-center p-6 space-x-2 rounded-b border-t border-gray-200 dark:border-stone-700">
                        <button id='signButton' data-modal-toggle="unsignedModal" type="button" className="text-white bg-red-500 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-red-500 dark:hover:bg-red-600 dark:focus:ring-red-800">Sign Now</button>
                        <button data-modal-toggle="unsignedModal" type="button" className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:ring-gray-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600">Cancel</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DocModalUnsigned;