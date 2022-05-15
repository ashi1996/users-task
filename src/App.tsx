import React, { useEffect } from 'react';
import {BrowserRouter as Router} from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from './state';
import { NUMBER_USER_RESULTS } from './common/consts/strings';
import AppRoutes from './appRotes';
import Header from './components/header';
import './App.css';

function App() {
  const dispatch = useDispatch();
  const { getAllUsers } = bindActionCreators(actionCreators, dispatch);
 
  useEffect(()=>{
    getAllUsers(NUMBER_USER_RESULTS);
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
