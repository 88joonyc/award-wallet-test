import React, { useState } from 'react';
import { BrowserRouter, Route, Switch, Routes  } from 'react-router-dom'

import AwardLogin from './components/pages/awardLogin/AwardLogin';
import Home from './components/pages/home/Home';

import './App.css';

function App() {



  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' exact='true' element={<Home/>} />
          <Route path='/login' exact='true' element={<AwardLogin />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
