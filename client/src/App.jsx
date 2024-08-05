import { Container } from '@mui/material';
import React from 'react';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Auth from './components/Auth/Auth';
import PostDetails from './components/PostDetails/PostDetails';
import Redirect from './Redirect';

const App = () => {
  const user = JSON.parse(localStorage.getItem("profile"))
  console.log(user)
  return (
    <BrowserRouter>
      <Container maxWidth="xl">
        <Navbar />
        <Routes>
          <Route path='/' element={<Redirect />} />
          <Route path='/posts' element={<Home />} />
          <Route path='/posts/search' element={<Home />} />
          <Route path='/posts/:id' element={<PostDetails />} />
          <Route path='/auth' element={() =>(!user ?<Auth />:<Redirect/>)} />
        </Routes>
      </Container>
    </BrowserRouter>
  );
};

export default App;
