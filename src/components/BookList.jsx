import React from 'react';

const BookList = () => (
  <form>
    <h2>ADD NEW BOOK</h2>
    <input type="text" placeholder="Book Title" required />
    <input type="text" placeholder="Author" required />
  </form>
);

export default BookList;
