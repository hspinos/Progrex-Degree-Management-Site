import React from 'react';
function ProgressBar({progressPercentage}){
    return (
        <div className='h-4 rounded-full w-full bg-gray-300'>
            <div 
            style={{width:`${progressPercentage}%`}}
            className={`h-full rounded-full ${
                progressPercentage < 50 ? 'bg-red-600' : 'bg-green-600'}`}>
            </div>
        </div>
    );

}
export default ProgressBar;