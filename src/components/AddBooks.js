import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux/';
import { addbook } from '../redux/books/asyncActions';
import './Addbooks.css';

const AddBooks = () => {
  const dispatch = useDispatch();

  const [input, setInput] = useState({
    title: '',
    author: '',
    category: '',
    item_id: '',
  });

  const handleKeydown = (event) => {
    setInput({
      ...input,
      [event.target.name]: event.target.value,
      category: 'Fiction',
      item_id: uuidv4(),
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (input.title.trim() && input.author.trim()) {
      dispatch(addbook(input)).then((data) => data);
    }
    setInput({
      title: '',
      author: '',
    });
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="horizontal-divider" />
      <h3 className="form-title">Add New Book</h3>
      <div className="form-input">
        <input
          className="new-title"
          type="text"
          placeholder="Book Title"
          name="title"
          required
          value={input.title}
          onChange={handleKeydown}
        />
        <input
          className="author"
          type="text"
          placeholder="Author"
          name="author"
          required
          value={input.author}
          onChange={handleKeydown}
        />
        <button className="Add" type="submit">Add new</button>
      </div>
    </form>
  );
};
export default AddBooks;
