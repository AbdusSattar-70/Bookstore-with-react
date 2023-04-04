/* This is Homepage */

import React, { useState } from 'react';
import { v4 as id } from 'uuid';

import BookList from '../BookList';
import AddNewBook from '../AddNewBook';

const Books = () => {
  const [bookData, setBookData] = useState([]);
  const handleAddBook = (newBook) => {
    setBookData((PreviouBookData) => [...PreviouBookData, { key: id(), newBook }]);
  };

  return (
    <main>
      <BookList bookData={bookData} />
      <AddNewBook onAddBook={handleAddBook} />
    </main>
  );
};
export default Books;
