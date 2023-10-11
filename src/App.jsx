import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Staff from './pages/Staff'
import Classes from './pages/Classes';

export default function App () {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/staff" element= {<Staff />} />
        <Route path="/classes" element= {<Classes />}/>
      </Routes>
    </BrowserRouter>
  );
};
