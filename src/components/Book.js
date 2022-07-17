/* eslint-disable react/jsx-indent */
import React from 'react';
import PropTypes from 'prop-types';
import './Book.css';
import { useDispatch } from 'react-redux';
import { deleteBook } from '../redux/books/asyncActions';

function Book({ List: book }) {
  const dispatch = useDispatch();

  const handleDelete = () => dispatch(deleteBook(book.item_id));

  return (
    // <div>
    //   <div className="main">
    //     <h2>{ book.title }</h2>
    //     <h3>{ book.author }</h3>
    //   </div>
    //   <ul className="list">
    //     <li>Comments</li>
    //     <li>
    //       <button onClick={handleDelete} type="button">Remove</button>
    //     </li>
    //     <li>Edit</li>
    //   </ul>
    // </div>
    <li className="list-item">
      <div className="book">
      <div className="book-content">
        <div className="book-info">
          <h4 className="book-category">Fiction</h4>
          <h2 className="book-title">{book.title}</h2>
          <h6 className="book-author">{book.author}</h6>
          <div className="action-buttons">
            <button className="button-outline" type="button">Comments</button>
            <div className="vertical-divider" />
            <button className="button-outline" onClick={handleDelete} type="button">Remove</button>
            <div className="vertical-divider" />
            <button className="button-outline" type="button">Edit</button>
          </div>
        </div>
        <div className="progress-container">
          <div className="circular-progress-container">
            <div className="circular-progress" />
          </div>
          <div className="progress-stat">
            <p className="percent-complete">75%</p>
            <p className="completed">Completed</p>
          </div>
          <div className="progress-divider" />
          <div className="current-chapter-container">
            <div>
              <p className="current-chapter-label">CURRENT CHAPTER</p>
              <p className="current-chapter">Chapter 20</p>
            </div>
            <div><button className="primary-button" type="button">UPDATE PROGRESS</button></div>
          </div>
        </div>
      </div>
      </div>
    </li>
  );
}

Book.defaultProps = {
  title: null,
  author: null,
  item_id: null,
};

Book.propTypes = {
  List: PropTypes.instanceOf(Object).isRequired,
  author: PropTypes.string,
  title: PropTypes.string,
  item_id: PropTypes.number,
};

export default Book;
