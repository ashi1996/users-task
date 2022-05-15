import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../state/reducers';
import { FormType } from '../common/consts/model';
import AddUserForm from '../components/forms/addUserForm';
import EditUserForm from '../components/forms/editUserForm';
import '../App.css';

function Modal(props:any) {

  const form = useSelector((state: RootState) => state.users.modalLoadForm)
  return (
    <div className="modal fade" id="Modal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">{form === FormType.ADD_USER ? "Add User" : "Edit User"}</h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">
            {form === FormType.ADD_USER ? 
              <AddUserForm/> 
            : 
              <EditUserForm/>
            }
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;