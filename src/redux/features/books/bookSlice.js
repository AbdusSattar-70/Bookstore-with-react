const { createSlice } = require('@reduxjs/toolkit');

const initialBooks = {
  books: [],
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
