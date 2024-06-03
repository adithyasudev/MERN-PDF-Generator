import React from 'react';
import { Link } from 'react-router-dom';

const BookList = ({ books }) => {
  return (
    <div>
      {books.map((book) => (
        <div key={book._id}>
          <Link to={`/books/${book._id}`}>
            <h2>{book.title}</h2>
            <p>{book.author}</p>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default BookList;
