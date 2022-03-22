import React, { useState } from "react"
import data from "./mock-data.json"


function CourseTable() {
    const [contacts, setContacts] = useState(data);
    return (

        <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table class="w-full text-sm text-left text-white-500 dark:text-white-400">
                <thead class="text-xs text-white-700 uppercase bg-white-50 dark:bg-white-700 dark:text-white-400">
                    <tr>
                        <th scope="col" class="px-6 py-3">
                            Course Name
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Course ID
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Course Year
                        </th>
                    </tr>
                </thead>
                <tbody> 
                    {contacts.map((contact) => (
                    <tr class="bg-gray border-b dark:bg-black-800 dark:border-white-700">
                        
                        <th scope="row" class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                            {contact.name}
                        </th>
                        <td class="px-6 py-4">
                            {contact.id}
                        </td>
                        <td class="px-6 py-4">
                            {contact.courseYear}
                        </td>
                    </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
export default CourseTable;
