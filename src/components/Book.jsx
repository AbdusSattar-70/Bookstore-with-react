import React from 'react';
import PropTypes from 'prop-types';

const Book = (props) => {
  const { book } = props;
  const { title, author } = book.newBook;

  return (
    <h3 style={{ margin: '2rem 20rem' }}>
      {title}
      {' '}
      {author}
      {' '}
      <button type="button">Remove</button>
    </h3>
  );
};

Book.propTypes = {
  book: PropTypes.objectOf(PropTypes.objectOf).isRequired,
};

export default Book;
