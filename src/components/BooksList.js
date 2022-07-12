/* eslint-disable react/prop-types */
import React from 'react';
import Book from './Book';
import AddBooks from './AddBooks';

// eslint-disable-next-line react/prop-types
const BooksList = ({ bookslist }) => {
  // eslint-disable-next-line no-unused-vars
  const books = [
    {
      book: 'one',
    },
  ];

  return (
    <div>
      {bookslist.map((item) => <Book key={item.id} List={item} />)}
      <AddBooks />
    </div>

  );
};

export default BooksList;
