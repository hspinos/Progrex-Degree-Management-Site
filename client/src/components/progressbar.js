import React from 'react';
function ProgressBar({progressPercentage}){
    return (
        <div>
            <div class="flex justify-between mb-1">
                <span class="text-base font-medium text-blue-700 dark:text-white"></span>
                <span class="text-sm font-medium text-blue-700 dark:text-white">{progressPercentage}%</span>
            </div>
            <div class="w-full bg-gray-200 rounded-full h-4 dark:bg-gray-700">
            <div class="bg-[#2BB673] h-4 rounded-full" style={{width:`${progressPercentage}%`}}></div>
        </div>
    </div>
    );

}
export default ProgressBar;