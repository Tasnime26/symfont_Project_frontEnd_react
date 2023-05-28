import './App.css';
import ProbListing from './ProbListing';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProbCreate from './ProbCreate';
import ProbDetail from './ProbDetail';
import ProbEdit from './ProbEdit';
import Home from './Home';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Probleme/Allquestions" element={<ProbListing />} />
          <Route path="/Probleme/create" element={<ProbCreate />} />
          <Route path="/Probleme/detail/:Probid" element={<ProbDetail />} />
          <Route path="/Probleme/edit/:Probid" element={<ProbEdit />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
