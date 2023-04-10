const { createSlice } = require('@reduxjs/toolkit');

const initialBooks = {
  books:
[
  {
    id: 'item1',
    title: 'The Great Gatsby',
    author: 'John Smith',
    category: 'Fiction',
  },
  {
    id: 'item2',
    title: 'Anna Karenina',
    author: 'Leo Tolstoy',
    category: 'Fiction',
  },
  {
    id: 'item3',
    title: 'The Selfish Gene',
    author: 'Richard Dawkins',
    category: 'Nonfiction',
  },
],
};

export const bookSlice = createSlice({
  name: 'book',
  initialState: initialBooks,
  reducers: {
    addBook: (state, action) => {
      state.books.push(action.payload);
    },
    removeBook: (state, action) => {
      const id = action.payload;
      state.books = state.books.filter((book) => book.id !== id);
    },

  },
});

export const { addBook, removeBook } = bookSlice.actions;
export default bookSlice.reducer;
