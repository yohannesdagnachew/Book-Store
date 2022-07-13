import { v4 as uuidv4 } from 'uuid';

const inState = [
  {
    title: 'Mewtat Ena Megbat',
    author: 'Bewketu Seyoum',
    id: '1',
  },
  {
    title: 'Muart',
    author: 'Yatsede Lij',
    id: '2',
  },
  {
    title: 'Kes Mahari',
    author: 'Endale Geta',
    id: '3',
  },
];
const ADD_BOOK = './books/ADD_BOOK';
const REMOVE_BOOK = './books/REMOVE_BOOK';

const bookReducer = (state = inState, action) => {
  switch (action.type) {
    case ADD_BOOK: {
      const newBook = {
        id: uuidv4(),
        ...action.book,
      };
      return [...state, newBook];
    }
    case REMOVE_BOOK: {
      const newlist = state.filter((book) => book.id !== action.id);
      return newlist;
    }
    default: return state;
  }
};

export const addbook = (book) => ({
  type: ADD_BOOK,
  book,
});
export const delBook = (id) => ({
  type: REMOVE_BOOK,
  id,
});
export default bookReducer;
