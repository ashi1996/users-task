import React from 'react';
import {Outlet} from 'react-router-dom'
import '../App.css';

function Main() {
  return (
    <main>
      <Outlet/>
    </main>
  );
}

export default Main;
