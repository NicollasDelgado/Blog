import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {Home} from './pages/Home';
import  {Profile}  from './pages/Profile';

function App() {
  return (
    <BrowserRouter basename="/Blog">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
