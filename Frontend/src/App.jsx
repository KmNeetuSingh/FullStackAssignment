import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'; 
import Login from './components/Login';
import Signup from './components/Signup';
import ProductList from './components/ProductList';
import ProductForm from './components/ProductForm'; 
import ProtectedRoute from './ProtectedRoute';
import './styles.css';

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setIsAuthenticated(true);
    }
  }, []);

  return (
    <Router>
      <div className="App">
        <h1>Full Stack Application</h1>
        <Routes>  
          <Route path="/signup" element={<Signup />} /> 
          <Route path="/login" element={<Login />} /> 
          <Route
            path="/products"
            element={
              <ProtectedRoute isAuthenticated={isAuthenticated}>
                <ProductList />
              </ProtectedRoute>
            } 
          />
          <Route
            path="/add-product"
            element={
              <ProtectedRoute isAuthenticated={isAuthenticated}>
                <ProductForm />
              </ProtectedRoute>
            }
          />
          <Route path="/" element={<Navigate to="/signup" />} /> 
        </Routes>
      </div>
    </Router>
  );
};

export default App;
