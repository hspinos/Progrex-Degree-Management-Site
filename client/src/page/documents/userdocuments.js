import React from 'react';

import DocumentCard from '../../components/documentcard';
import DocumentModal from '../../components/documentmodal'

let fillerText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam nec feugiat lorem, sed efficitur nulla. Donec elementum augue ac ex suscipit fermentum.';

function handleCardClick(){
    document.getElementById('modalTitle').textContent='test';
}

function UserDocuments() {
    let documents=[{
        name:"Document 1",
        desc:fillerText,
        isSigned:true,
        id:1,
      },{
        name:"Document 2",
        desc:fillerText,
        isSigned:true,
        id:2,
      },{
        name:"Document 3",
        desc:fillerText,
        isSigned:true,
        id:3,
      },{
        name:"Document 4",
        desc:fillerText,
        isSigned:false,
        id:4,
      },{
        name:"Document 5",
        desc:fillerText,
        isSigned:false,
        id:5,
      },{
        name:"Document 6",
        desc:fillerText,
        isSigned:true,
        id:6,
      }]

    let docs = documents.map((doc)=>{
        return <DocumentCard key={doc.id} name={doc.name} desc={doc.desc} isSigned={doc.isSigned} />
    })  

    return (
        <div>
            <button  class="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button" data-modal-toggle="docModal">
  Toggle modal
</button>
            <div className="mt-8 grid grid-cols-4 gap-10">
                {docs}
            </div>
            <DocumentModal />
        </div>
    );
}

export default UserDocuments;