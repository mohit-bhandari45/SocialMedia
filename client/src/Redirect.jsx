// RedirectToPosts.js
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Redirect = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate('/posts');
  }, [navigate]);

  return null; // This component does not render anything
};

export default Redirect
