import React from 'react';
function ProgressBar({progressPercentage}){
    return (
        <div className='h-4 rounded-full w-full bg-gray-300'>
            <div 
            style={{width:`${progressPercentage}%`}}
            className={`h-full flex items-center place-content-center rounded-full bg-gradient-to-r from-red-600 to-green-600`}>
                    <div className='text-6x1 font-semibold text-white'>{progressPercentage}%</div>
            </div>
            
        </div>
    );

}
export default ProgressBar;