import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Checkout from './Checkout';
import Menu from './Menu';
import './App.css';
import React from 'react';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Menu />} />
        <Route path='/checkout' element={<Checkout />} />
      </Routes>
    </Router>
  );
}

export default App;
