import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';

import DocumentCard from '../../components/documentcard';
import DocModalUnsigned from '../../components/docmodalunsigned'
import DocModalSigned from '../../components/docmodalsigned'

//Fetching documents from backend
function UserDocuments() {
  var user;

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

  /*const getSignedStatus = async (doc, userId) => {
    /*axios.get(`/document/sign/${doc._id}/${userId}`)
      .then(function (response) {
        console.log(response.data);
        doc.isSigned = response.data;
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
        // always executed
      });
    try {
      const response = await axios.get(`/document/sign/${doc._id}/${userId}`);
      const isSigned = await response.data;

      doc.isSigned = isSigned;
      console.log(doc);
      //return isSigned;

    } catch (err) {
      console.error(err.message);
    }
  };*/

  useEffect(() => {
    getDocuments();
  }, []);

  if (Cookies.get('userCookie')) {
    user = JSON.parse(Cookies.get('userCookie'));
    //console.log(getSignedStatus('6230fb7987ffc44cd5a6b7ce',user.id));
  }

  //console.log(user.id);


  /*documents.map((doc) => {
    getSignedStatus(doc, user.id);
    console.log(doc);
  })*/
  //Mapping document JSON objects to card components
  let docs = documents.map((doc) => {
    /*console.log(doc._id +" " + user.id);
    let isSigned = getSignedStatus(doc._id, user.id);
    console.log(isSigned);*/
    //getSignedStatus(doc, user.id);
    //console.log(doc);
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