import React from 'react';
import Book from './Book';
import AddBooks from './AddBooks';

const BooksList = () => {
  const bookslist = [
    {
      title: 'Mewtat Ena Megbat',
      author: 'Bewketu Seyoum',
      id: 1,
    },
    {
      title: 'Muart',
      author: 'Yatsede Lij',
      id: 2,
    },
    {
      title: 'Kes Mahari',
      author: 'Endale Geta',
      id: 3,
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
