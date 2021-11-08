import React, { useState, useEffect } from 'react';
import LibraryBooks from './LibraryBooks';
const Library = ({ search }) => {

  const [books, setBooks] = useState([]);


  const [library, setLibrary] = useState([]);



  // const resultFilter = [];
 

  useEffect(() => {
    fetch('http://localhost:8000/notes')
      .then(res => {
        return res.json();
      })
      .then(data=>{
        setBooks(data);
      });

  }, []);

  useEffect(() => {
    fetch('http://localhost:8000/read')
      .then(res => {
        return res.json();
      })
      .then(data => {
        setLibrary(data);
      });
      console.log("harry")
  },[]);

  const result = books;

 
  


  const addToLibrary =  (id, title, author, image, category, time) => {

    let flag = 0;
    if (library) {
      for (let i = 0; i < books.length; i++) {
        if (books[i].id === id) {
          flag = i;
        }
      }

      const tempBook = {
        id, title, author, category, image, time, status: "true"
      };
      
       fetch('http://localhost:8000/read/', {
        method: 'POST',
        body: JSON.stringify(books[flag]),
        headers: {
          "Content-type": "application/json; charset=UTF-8"
        }
      });
    }
  };

  return (
    <div>
      <h1>{search}</h1>
      {books && <LibraryBooks library={library} result={result} callBack={(title, author, image, category, time) => addToLibrary(title, author, image, category, time)} />}
    </div>

  );

};

export default Library;