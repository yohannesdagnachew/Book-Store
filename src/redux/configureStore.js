import { configureStore, combineReducers, applyMiddleware } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import bookReducer from './books/book';
import categorySlice from './categories/categories';

const rootReducer = combineReducers({
  reducer: {
    book: bookReducer,
    category: categorySlice,
  },
});
const store = configureStore(rootReducer, applyMiddleware(thunk));

export default store;
