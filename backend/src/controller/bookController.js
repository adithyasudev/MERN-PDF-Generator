// controllers/bookController.js

// Example controller function to fetch all books from the database
const getAllBooks = async (req, res) => {
    try {
      // Fetch books data from the database
      const books = await Book.find(); // Example: using Mongoose for MongoDB
  
      // Return the books data as a JSON response
      res.json({ books });
    } catch (error) {
      // Handle errors
      console.error('Error fetching books:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };
  
  module.exports = { getAllBooks };
  