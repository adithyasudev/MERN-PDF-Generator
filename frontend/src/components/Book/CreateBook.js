import React, { useState } from 'react';
import axios from 'axios';

const CreateBook = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [frontCoverImage, setFrontCoverImage] = useState('https://masai-course.s3.ap-south-1.amazonaws.com/editor/uploads/2024-06-01/f_115584.png');
  const [backCoverImage, setBackCoverImage] = useState('https://masai-course.s3.ap-south-1.amazonaws.com/editor/uploads/2024-06-01/back_141008.png');
  const [pages, setPages] = useState([{ content: '', backgroundImage: 'https://masai-course.s3.ap-south-1.amazonaws.com/editor/uploads/2024-06-01/inter_383257.png' }]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/books/create', {
        title,
        author,
        frontCoverImage,
        backCoverImage,
        pages,
      });
      // Redirect to dashboard or book list
    } catch (error) {
      console.error('Error creating book:', error);
    }
  };

  const handleAddPage = () => {
    setPages([...pages, { content: '', backgroundImage: 'https://masai-course.s3.ap-south-1.amazonaws.com/editor/uploads/2024-06-01/inter_383257.png' }]);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Author"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Front Cover Image URL"
        value={frontCoverImage}
        onChange={(e) => setFrontCoverImage(e.target.value)}
      />
      <input
        type="text"
        placeholder="Back Cover Image URL"
        value={backCoverImage}
        onChange={(e) => setBackCoverImage(e.target.value)}
      />
      {pages.map((page, index) => (
        <div key={index}>
          <input
            type="text"
            placeholder={`Page ${index + 1} Content`}
            value={page.content}
            onChange={(e) => {
              const newPages = [...pages];
              newPages[index].content = e.target.value;
              setPages(newPages);
            }}
          />
          <input
            type="text"
            placeholder={`Page ${index + 1} Background Image URL`}
            value={page.backgroundImage}
            onChange={(e) => {
              const newPages = [...pages];
              newPages[index].backgroundImage = e.target.value;
              setPages(newPages);
            }}
          />
        </div>
      ))}
      <button type="button" onClick={handleAddPage}>
        Add Page
      </button>
      <button type="submit">Create Book</button>
    </form>
  );
};

export default CreateBook;
