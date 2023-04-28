import React, { useState } from 'react';
import { BrowserRouter, Route, Switch, Routes  } from 'react-router-dom'

import AwardLogin from './components/pages/AwardLogin';
import Home from './components/pages/Home';
import Wallet from './components/pages/Wallet';

import './App.css';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' exact='true' element={<Home/>} />
          <Route path='/login' exact='true' element={<AwardLogin />} />
          <Route path='/wallet' exact='true' element={<Wallet/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
