import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import HomePage from './components/homePage';
import Main from './components/main';

function AppRoutes() {

  return (
    <Routes>
      <Route path='/' element={<Main/>}>
        <Route index element={<HomePage/>} />
      </Route>
    </Routes>
  );
}

export default AppRoutes;