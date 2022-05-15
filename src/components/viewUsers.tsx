import React from 'react';
import { useSelector } from 'react-redux';
import { IUser } from '../common/consts/model';
import { RootState } from '../state/reducers';
import ViewItemUser from './viewItemUser';
import '../App.css';

function ViewUsers() {
  const users = useSelector((state: RootState) => state.users.allUsers);
  return (
    <div className='container mt-3'>
      {users.length ?
        <div className='row justify-content-center '>
          {users.map((user:IUser, index:number)=>{
            return(
              <ViewItemUser user={user} key={index}/>
              )
            })}
        </div>
      : 
        <h3 className='text-center mt-5 text-danger'>All users are deleted</h3>
      }
    </div>
  );
}

export default ViewUsers;
