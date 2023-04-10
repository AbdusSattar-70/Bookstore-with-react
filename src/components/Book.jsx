import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { removeBook } from '../redux/features/books/bookSlice';

const Book = () => {
  const bookData = useSelector((state) => state.allBook.books);
  const dispatch = useDispatch();

  return (
    <div style={{ margin: '2rem 20rem' }}>
      { bookData && bookData.map((book) => {
        const { title, author, id } = book;
        return (
          <ul key={id}>
            <li>
              {title}
            </li>
            <li>
              {author}
            </li>
            <li>
              <button
                onClick={() => dispatch(removeBook(id))}
                type="button"
              >
                Remove
              </button>
            </li>
          </ul>
        );
      })}
    </div>
  );
};

export default Book;
