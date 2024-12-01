import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // useNavigate hook

const ProtectedRoute = ({ isAuthenticated, children }) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/login'); // Navigate to login if not authenticated
    }
  }, [isAuthenticated, navigate]);

  return isAuthenticated ? children : null; // Render protected content if authenticated
};

export default ProtectedRoute;
