import './App.css';
import { Route, Routes } from 'react-router-dom';
import Nav from './components/Nav';
import BooksList from './components/BooksList';
import Categories from './components/Categories';

function App() {
  return (
    <div className="App">
      <div className="header">
        <Nav />
      </div>
      <Routes>
        <Route path="/categories" element={<Categories />} />
        <Route path="/" element={<BooksList />} />
      </Routes>
    </div>
  );
}

export default App;
