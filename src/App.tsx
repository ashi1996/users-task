import React, { useEffect } from 'react';
import {BrowserRouter as Router} from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from './state';
import Header from './comps/header';
import AppRoutes from './appRotes';
import { INIT_CITY_CODE } from './common/consts/strings';
import './App.css';

function App() {
  const dispatch = useDispatch();
  const { getCurrentConditions } = bindActionCreators(actionCreators, dispatch);
 
  useEffect(()=>{
    getCurrentConditions(INIT_CITY_CODE);
  },[])

  return (
    <div className="App" style={{paddingTop:"50px"}}>
      <Router>
        <Header/>
        <AppRoutes/>
      </Router>
    </div>
  );
}

export default App;
