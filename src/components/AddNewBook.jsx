import React, { useState } from 'react';
import PropTypes from 'prop-types';

const AddNewBook = (props) => {
  const { onAddBook } = props;
  const [newBook, setNewBook] = useState({ title: '', author: '' });
  const { title, author } = newBook;

  const handleChange = (event) => {
    const { name } = event.target;
    setNewBook((previousBook) => ({ ...previousBook, [name]: event.target.value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onAddBook(newBook);
    setNewBook({ title: '', author: '' });
  };

  return (
    <form onSubmit={handleSubmit} style={{ margin: '4rem 20rem' }}>
      <h2>ADD NEW BOOK</h2>
      <input onChange={handleChange} type="text" id="title" name="title" value={title} placeholder="Book Title" required />
      {' '}
      <input onChange={handleChange} type="text" id="author" name="author" value={author} placeholder="Author" required />
      {' '}
      <button type="submit">Add Book</button>
    </form>
  );
};

AddNewBook.propTypes = {
  onAddBook: PropTypes.func.isRequired,
};

export default AddNewBook;
