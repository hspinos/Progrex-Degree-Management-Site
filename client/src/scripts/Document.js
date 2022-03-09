import React, { useState, useEffect } from 'react';

export function Document() {
    const [documents, setDocuments] = useState([]);
    
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
    }, []);

    return documents;
}