import React from 'react';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import VendingMaching from './VendingMaching';
import Chips from './Chips';
import Soda from './Soda';
import CandyBar from './CandyBar';

import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<VendingMaching />}/>
          <Route exact path="/chips" element={<Chips />}/>
          <Route exact path="/soda" element={<Soda />}/>
          <Route exact path="/candy-bar" element={<CandyBar />}/>
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
