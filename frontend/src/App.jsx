import './App.css';
import React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Register from './Auth/Register';
import Login from './Auth/Login';
import Dashboard from './pages/UserProfile';
import { useAuth } from './contexts/AuthContext';
import Home from './pages/Home';

function App() {
  
  const { isAuthenticated } = useAuth();

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={!isAuthenticated ? <Register /> : <Navigate to='/home' />} />
        <Route path='/login' element={!isAuthenticated ? <Login /> : <Navigate to='/home' />} />
        <Route path='/home' element={isAuthenticated ? <Home /> : <Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
