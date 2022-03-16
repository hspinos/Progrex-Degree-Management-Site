import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';

import DocumentCard from '../../components/documentcard';
import DocModalUnsigned from '../../components/docmodalunsigned'
import DocModalSigned from '../../components/docmodalsigned'

//Fetching documents from backend
function UserDocuments() {
  const [documents, setDocuments] = useState([]);

  const getDocuments = async () => {
    try {
      const response = await axios.get("/document/list");
      const jsonData = await response.data;

      console.log(jsonData);

      setDocuments(jsonData);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getDocuments();
  }, []);

  if (Cookies.get('userCookie')) {
    user = JSON.parse(Cookies.get('userCookie'));
  }

  //Mapping document JSON objects to card components
  let docs = documents.map((doc) => {
    return <DocumentCard key={doc._id} name={doc.name} desc={doc.description} id={doc._id} pfUrl={doc.powerFormUrl} />
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