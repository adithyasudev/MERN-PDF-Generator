import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const BookDetail = () => {
  const { id } = useParams();
  const [book, setBook] = useState(null);

  useEffect(() => {
    const fetchBook = async () => {
      try {
        const response = await axios.get(`/books/${id}`);
        setBook(response.data);
      } catch (error) {
        console.error('Error fetching book:', error);
      }
    };

    fetchBook();
  }, [id]);

  if (!book) return <div>Loading...</div>;

  return (
    <div>
      <h1>{book.title}</h1>
      <h2>{book.author}</h2>
      <img src={book.frontCoverImage} alt="Front Cover" />
      <img src={book.backCoverImage} alt="Back Cover" />
      {book.pages.map((page, index) => (
        <div key={index}>
          <img src={page.backgroundImage} alt={`Page ${index + 1}`} />
          <p>{page.content}</p>
        </div>
      ))}
    </div>
  );
};

export default BookDetail;
