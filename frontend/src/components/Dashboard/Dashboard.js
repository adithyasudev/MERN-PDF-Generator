import React, { useEffect, useState } from 'react';
import axios from 'axios';
import BookList from './BookList';

const Dashboard = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await axios.get('/books');
        setBooks(response.data.books);
      } catch (error) {
        console.error('Error fetching books:', error);
      }
    };

    fetchBooks();
  }, []);

  return (
    <div>
      <h1>Dashboard</h1>
      <BookList books={books} />
    </div>
  );
};

export default Dashboard;
