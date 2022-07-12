/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
const inState = [];
const bookReducer = (state = inState, action) => {
  switch (action.type) {
    case 'ADD_Book': {
      const newBook = {
        title: action.book.title,
        id: action.book.title,
        author: action.book.author,
      };
    }
      return [...state, newBook];
    case 'Remove': {
      const remove = state.filter((book) => book.id !== action.id);
      return remove;
    }
    default: return state;
  }
};

export const addBookFunc = (book) => ({
  type: 'ADD_BOOK',
  book,
});
export const removeBookFunc = (id) => ({
  type: 'REMOVE_BOOK',
  id,
});

export default bookReducer;
