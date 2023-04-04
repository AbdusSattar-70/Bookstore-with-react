import React from 'react';
import PropTypes from 'prop-types';

import Book from './Book';

const BookList = (props) => {
  const { bookData } = props;
  return (
    <section>
      {bookData.map((book) => <Book key={book.key} book={book} />)}
    </section>
  );
};

BookList.propTypes = {
  bookData: PropTypes.arrayOf(PropTypes.objectOf).isRequired,
};

export default BookList;
