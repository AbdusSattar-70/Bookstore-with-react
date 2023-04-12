import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuid } from 'uuid';

import { addBook, postBook } from '../redux/features/books/bookSlice';

const AddNewBook = () => {
  const [newBook, setNewBook] = useState({
    item_id: '', title: '', author: '', category: '',
  });
  const [message, setMessage] = useState('');
  const dispatch = useDispatch();
  const { title, author } = newBook;

  const handleChange = (event) => {
    const { name } = event.target;
    setNewBook((previousBook) => ({ ...previousBook, [name]: event.target.value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (title.trim() && author.trim()) {
      dispatch(postBook({ ...newBook, item_id: uuid(), category: 'politics' }))
        .then(() => dispatch(addBook({ ...newBook, item_id: uuid(), category: 'politics' })));
      setNewBook({ title: '', author: '' });
      setMessage('');
    } else {
      setMessage('Please add Book and author name properly');
    }
  };

  return (
    <form className="addBookForm" onSubmit={handleSubmit}>
      <h2 className="addBookTitle">ADD NEW BOOK</h2>
      <div className="flex addBookInput">
        <input className="inputTitle" onChange={handleChange} type="text" id="title" name="title" value={title} placeholder="Book Title" />
        <input className="inputAuthor" onChange={handleChange} type="text" id="author" name="author" value={author} placeholder="Author" />
        <button className="addButton" type="submit">Add Book</button>
      </div>
      <br />
      <span>{message}</span>
    </form>
  );
};

export default AddNewBook;
