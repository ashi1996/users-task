import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FormType, IUser } from '../common/consts/model';
import { RootState } from '../state/reducers';
import { Icon } from '../common/services/icons';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../state';
import '../App.css';

interface Props {
  user:IUser
}

function ViewItemUser({user} : Props ) {
  const users = useSelector((state: RootState) => state.users.allUsers);
  const dispatch = useDispatch();
  const { updateUsers ,loadForm} = bindActionCreators(actionCreators, dispatch);

  const deleteUser = () =>{
    if(window.confirm(`Are you sure you want to delete user ${user?.name?.first} ${user?.name?.last}?`)){
      const usersAfterDelete:IUser[] = users.filter(((userFromFilter: IUser)=> userFromFilter.UUid !== user.UUid));
      updateUsers(usersAfterDelete)
    }
  }

  return (
    <div className="card col-lg-3 col-md-4 p-3 m-1 animate__animated animate__zoomIn  shadow" >
      <img src={user?.picture?.large} className="card-img-top mx-auto" style={{borderRadius:"50%" , width:"100px"}} alt={`userImage${user?.id?.value}`} />
      <div className="card-body mt-2" style={{background:"#F5FFFA" , borderRadius:"7px"}}>
        <h4 className="card-title text-center">{`${user?.name?.title} ${user?.name?.first} ${user?.name?.last}`}</h4>
        <div className="card-text text-center mt-2">{user.email}</div>
        <div className="card-text m-1 p-2">
          <div className='text-center mb-3' style={{borderBottom:"2px solid black"}}>Location</div>
            <div>Country: {user?.location?.country}</div>
            <div>City: {user?.location?.city}</div>
            <div>{`Street: ${user?.location?.street?.name}, ${user?.location?.street?.number}`}</div>
        </div> 
      </div>
        <div className="card-text text-center mt-3">Id: {user.UUid}</div>

       <div className='d-flex justify-content-between col-8 mx-auto p-3'>
         <div onClick={()=>loadForm(FormType.EDIT_USER)} data-bs-toggle="modal" data-bs-target="#Modal" className='btn btn-outline-success rounded-circle' title='Edit'>
          {Icon.edit()}
         </div>
         <div onClick={deleteUser} className='btn btn-outline-danger rounded-circle' title='Delete'>
          {Icon.trash()}
         </div>
       </div>
    </div>
  );
}

export default ViewItemUser;
