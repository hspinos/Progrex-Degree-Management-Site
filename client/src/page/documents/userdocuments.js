import React from 'react';

import DocumentCard from '../../components/documentcard';

let fillerText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam nec feugiat lorem, sed efficitur nulla. Donec elementum augue ac ex suscipit fermentum.';

function UserDocuments() {
    let documents=[{
        name:"Document 1",
        desc:fillerText,
        isSigned:false,
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
            <div className="mt-8 grid grid-cols-4 gap-10">
                {docs}
            </div>
        </div>
    );
}

export default UserDocuments;