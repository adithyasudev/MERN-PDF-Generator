import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AuthProvider from './context/AuthContext';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import Dashboard from './components/Dashboard/Dashboard';
import BookDetail from './components/Dashboard/BookDetail';
import CreateBook from './components/Book/CreateBook';

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/books/:id" element={<BookDetail />} />
          <Route path="/create-book" element={<CreateBook />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;
