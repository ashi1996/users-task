import React from 'react';
import { useSelector } from 'react-redux';
import {NavLink} from 'react-router-dom'
import { RootState } from '../state/reducers';
import '../App.css';

function Header() {
  const favoriteClassAnimation = useSelector((state: RootState) => state.weather.favoritesClassAnimation)
  return (
    <header className='container-fluid d-flex justify-content-between align-items-center text-white'> 
      <div className='d-flex align-items-center'>
        <img src='logo.png' width="60px" className='logo pe-2'/>
        <span>Herolo Weather</span>
      </div>
      <ul className='nav'>
        <li><NavLink className={(navData:any)=>navData.isActive ? "text-danger" : ""} style={{textDecoration:'none', color:'white'}} to='/'>Home</NavLink></li>
        <li style={{position:'relative'}} className={'' +( favoriteClassAnimation ? 'shake' : '')}>
          <NavLink className={(navData:any)=>navData.isActive ? "text-danger" : ""} style={{textDecoration:'none', color:'white'}} to='/favorites'>Favorites</NavLink>
        </li>
      </ul>
    </header>
  );
}

export default Header;