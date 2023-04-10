import React, { useState } from 'react';
import PropTypes from 'prop-types';

const AddNewBook = (props) => {
  const [newBook, setNewBook] = useState({ title: '', author: '' });
  const [message, setMessage] = useState('');
  const { onAddBook } = props;
  const { title, author } = newBook;

  const handleChange = (event) => {
    const { name } = event.target;
    setNewBook((previousBook) => ({ ...previousBook, [name]: event.target.value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (title.trim()) {
      onAddBook(newBook);
      setNewBook({ title: '', author: '' });
      setMessage('');
    } else {
      setMessage('Please add Book and author name properly');
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ margin: '4rem 20rem' }}>
      <h2>ADD NEW BOOK</h2>
      <input onChange={handleChange} type="text" id="title" name="title" value={title} placeholder="Book Title" />
      {' '}
      <input onChange={handleChange} type="text" id="author" name="author" value={author} placeholder="Author" />
      {' '}
      <button type="submit">Add Book</button>
      <br />
      <span>{message}</span>
    </form>
  );
};

AddNewBook.propTypes = {
  onAddBook: PropTypes.func.isRequired,
};

export default AddNewBook;
