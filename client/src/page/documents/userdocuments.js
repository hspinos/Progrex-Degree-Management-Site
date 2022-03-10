import React, { useState, useEffect } from 'react';

import DocumentCard from '../../components/documentcard';
import DocModalUnsigned from '../../components/docmodalunsigned'
import DocModalSigned from '../../components/docmodalsigned'
import {Document} from '../../scripts/Document'




let fillerText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam nec feugiat lorem, sed efficitur nulla. Donec elementum augue ac ex suscipit fermentum.';


function UserDocuments() {
  /*const [documents, setDocuments] = useState([]);
  
  const getDocuments = async() => {
    try {
        
        const response = await fetch("http://localhost:3000/document/list");
        const jsonData = await response.json();

        setDocuments(jsonData);

    } catch (err) {
        console.error(err.message);
    }
  };
  useEffect(() => {
    getDocuments();
  }, []);*/
  const documents = Document();
  
  let documents3 = [];
  //documents3.push(...documents);

console.log(documents3);
    let documents2= [{
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
        isSigned:true,
        id:5,
      },{
        name:"Document 6",
        desc:fillerText,
        isSigned:true,
        id:6,
      }]
      //documents.push(...documents2);
      //console.log(documents2);
      
    let docs = documents.map((doc)=>{
        return <DocumentCard key={doc.id} name={doc.name} desc={doc.desc} isSigned={doc.isSigned} id={doc.id} />
    })  

    return (
        <div className="h-full flex items-center justify-center">
          <div className="w-9/12">
            <div className="mt-8 grid grid-cols-4 gap-10">
                {docs}
            </div>
            <DocModalUnsigned />
            <DocModalSigned />
            
            </div>
        </div>
    );
}

export default UserDocuments;