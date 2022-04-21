import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Favorites from './comps/favorites';
import HomePage from './comps/homePage';
import Main from './comps/main';

function AppRoutes() {

  return (
    <Routes>
      <Route path='/' element={<Main/>}>
        <Route index element={<HomePage/>} />
        <Route path='/favorites' element={<Favorites/>} />
      </Route>
    </Routes>
  );
}

export default AppRoutes;