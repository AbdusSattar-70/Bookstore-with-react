import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { v4 as uuid } from 'uuid';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

import { removeBook, fetchBooks } from '../redux/features/books/bookSlice';

const Book = () => {
  const bookData = useSelector((state) => state.allBook);
  const dispatch = useDispatch();
  const {
    isLoading, error, books, success,
  } = bookData;

  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch, success]);

  if (isLoading) {
    return <p>Please wait for a while data is loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  if (!books) {
    return null;
  }

  return (
    <div>
      { books && books.map((book) => (
        <div className="LessonPanel flex" key={uuid()}>
          <p>
            {book.title}
          </p>
          <p>
            {book.author}
          </p>
          <p>
            <button
              onClick={() => dispatch(removeBook(book.item_id))}
              type="button"
            >
              Remove
            </button>
          </p>
          <div className="ProgressOvalDiv">
            <CircularProgressbar className="ProgressOval" value={25} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Book;
