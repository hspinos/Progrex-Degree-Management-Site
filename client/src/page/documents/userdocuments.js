import React, { useState, useEffect } from 'react';

import DocumentCard from '../../components/documentcard';
import DocModalUnsigned from '../../components/docmodalunsigned'
import DocModalSigned from '../../components/docmodalsigned'

import axios from 'axios';

//Fetching documents from backend
function UserDocuments() {

  const [documents, setDocuments] = useState([]);

  const getDocuments = async () => {
    try {
      const response = await axios.get("/document/list");
      const jsonData = await response.data;

      setDocuments(jsonData);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getDocuments();
  }, []);

  //Mapping document JSON objects to card components
  let docs = documents.map((doc) => {
    return <DocumentCard key={doc.id} name={doc.name} desc={doc.desc} isSigned={doc.isSigned} id={doc.id} pfUrl={doc.powerFormUrl} />
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