import React from 'react';
import { useDispatch} from 'react-redux';
import {NavLink} from 'react-router-dom'
import { Icon } from '../common/services/icons';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../state';
import { FormType } from '../common/consts/model';
import '../App.css';

function Header() {
  const dispatch = useDispatch();
  const {loadForm} = bindActionCreators(actionCreators, dispatch);
  return (
    <header className='container-fluid d-flex justify-content-between align-items-center text-white'> 
      <div className='d-flex align-items-center p-1'>
        <img src='UserLogo.png' width="60px" className='logo pe-2'/>
        <span>User Management</span>
      </div>
      <ul className='nav'>
        <li onClick={()=>loadForm(FormType.ADD_USER)} data-bs-toggle="modal" data-bs-target="#Modal" title='Add User' className='addUser'><NavLink className="text-white pe-2" style={{textDecoration:'none', color:'white'}} to='/'>{Icon.addUser()}</NavLink></li>
      </ul>
    </header>
  );
}

export default Header;