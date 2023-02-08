import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Like from './pages/Like';

function App() {
  return (
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/like' element={<Like/>}/>
    <Route path="*" element={<Home />} />
   </Routes>
   </BrowserRouter>
  );
}

export default App;
