import './App.css';
import { Route, Routes } from 'react-router-dom';
import Nav from './components/Nav';
import BooksList from './components/BooksList';
import Categories from './components/Categories';

function App() {
  const booklist = [
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
    <div className="App">
      <div className="header">
        <h1>Bookstore CMS</h1>
        <Nav />
      </div>
      <Routes>
        <Route path="/categories" element={<Categories />} />
        <Route path="/" element={<BooksList bookslist={booklist} />} />
      </Routes>
    </div>
  );
}

export default App;
