const inState = [];
const ADD_BOOK = './books/ADD_BOOK';
const REMOVE_BOOK = './books/REMOVE_BOOK';

const bookSlice = (state = inState, action) => {
  switch (action.type) {
    case ADD_BOOK: {
      const newBook = {
        id: Math.floor(Math.random() * 1000),
        title: action.book.title,
        author: action.book.author,
        category: action.book.category,
      };
      return [...state, newBook];
    }
    case REMOVE_BOOK: {
      const remove = state.filter((book) => book[0] !== action.id);
      return remove;
    }
    default:
      return state;
  }
};
export const addBookFunc = (book) => ({
  type: ADD_BOOK,
  book,
});

export const removeBookFunc = (id) => ({
  type: REMOVE_BOOK,
  id,
});

export default bookSlice.reducer;
