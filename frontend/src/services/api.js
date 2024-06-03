import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8080',
  headers: {
    'Content-Type': 'application/json',
  },
});

export const registerUser = async (userData) => {
  return api.post('/user/register', userData);
};

export const loginUser = async (userData) => {
  return api.post('/user/login', userData);
};

export const fetchBooks = async () => {
  return api.get('/books');
};

export const fetchBookById = async (id) => {
  return api.get(`/books/${id}`);
};

export const createBook = async (bookData) => {
  return api.post('/books/create', bookData);
};

export const deleteBook = async (id) => {
  return api.delete(`/books/${id}`);
};
