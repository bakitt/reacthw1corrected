import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './HomePage';
import DetailPage from './DetailPage';
import DetailPage2 from './DetailPage2';
import DetailPage3 from './DetailPage3';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/detail" element={<DetailPage />} />
        <Route path="/" element={<HomePage />} />
        <Route path='/detail2' element={<DetailPage2 />}/>
        <Route path='/detail3' element={<DetailPage3 />}/>
      </Routes>
    </Router>
  );
};

export default App;
