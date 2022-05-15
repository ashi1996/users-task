import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {NavLink} from 'react-router-dom'
import { RootState } from '../../state/reducers';
import { useForm } from "react-hook-form";
import { IAddUser, IUser } from '../../common/consts/model';
import { v4 as uuidv4 } from 'uuid';
import '../../App.css';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../../state';

function AddUserForm() {
  const allUsers = useSelector((state: RootState) => state.users.allUsers)
  const dispatch = useDispatch();
  const { updateUsers } = bindActionCreators(actionCreators, dispatch);
  const { register, handleSubmit, formState: { errors } } = useForm();
  
  const onSubmit = (data : Partial<IAddUser>) => {
    let newUser:IUser = {
      name:{first : data.firstName , last: data.lastName, title:data.title},
      email:data.email,
      UUid : uuidv4(),
      picture:{large:data.img},
      location:{city:data.City, country:data.Country, street:{name:data.Street, number:data.StreetNumber} }
    }
   let users = [...allUsers];
   let exists = users.find(user => user.email === data.email);
   if(exists){
    return alert("Email already exists!")
   }
   users.push(newUser);
   updateUsers(users);
  }

  return (
   <form  onSubmit={handleSubmit(onSubmit)}>
     <div className='row'>

        <div className='p-1 col-md-6'>
          <label htmlFor='title' className=''>Title:*</label>
          <input id='title' className='form-control col-md-6' {...register("title", { required: "This field is required.", minLength:2 })} />
          {errors.title && errors.title.type === "required" && <small className='text-danger'>This field is required</small>}
          {errors.title && errors.title.type === "minLength" && <small className='text-danger'>minLength is 2.</small>}
        </div>

        <div className='p-1 col-md-6'>
          <label htmlFor='firstName' className=''>First Name:*</label>
          <input id='firstName' className='form-control col-md-6' {...register("firstName", { required: "This field is required.", minLength:3 })} />
          {errors.firstName && errors.firstName.type === "required" && <small className='text-danger'>This field is required</small>}
          {errors.firstName && errors.firstName.type === "minLength" && <small className='text-danger'>minLength is 3.</small>}
        </div>

        <div className='p-1 col-md-6'>
          <label htmlFor='lastName'>Last Name:*</label>
          <input id='lastName' className='form-control col-md-6' {...register("lastName", { required: true , minLength:3 })} />
          {errors.lastName && errors.lastName.type === "required" && <small className='text-danger'>This field is required</small>}
          {errors.lastName && errors.lastName.type === "minLength" && <small className='text-danger'>minLength is 3.</small>}
        </div>

        <div className='p-1 col-md-6'>
          <label htmlFor='Country' className=''>Country:*</label>
          <input id='Country' className='form-control col-md-6' {...register("Country", { required: "This field is required.", minLength:2 })} />
          {errors.Country && errors.Country.type === "required" && <small className='text-danger'>This field is required</small>}
          {errors.Country && errors.Country.type === "minLength" && <small className='text-danger'>minLength is 2.</small>}
        </div>
        <div className='p-1 col-md-6'>
          <label htmlFor='City' className=''>City:*</label>
          <input id='City' className='form-control col-md-6' {...register("City", { required: "This field is required.", minLength:2 })} />
          {errors.City && errors.City.type === "required" && <small className='text-danger'>This field is required</small>}
          {errors.City && errors.City.type === "minLength" && <small className='text-danger'>minLength is 2.</small>}
        </div>
        <div className='p-1 col-md-6'>
          <label htmlFor='Street' className=''>Street:*</label>
          <input id='Street' className='form-control col-md-6' {...register("Street", { required: "This field is required.", minLength:2 })} />
          {errors.Street && errors.Street.type === "required" && <small className='text-danger'>This field is required</small>}
          {errors.Street && errors.Street.type === "minLength" && <small className='text-danger'>minLength is 2.</small>}
        </div>

        <div className='p-1 col-md-6'>
          <label htmlFor='StreetNumber' className=''>Street Number:*</label>
          <input type='number' id='StreetNumber' className='form-control col-md-6' {...register("StreetNumber", { required: "This field is required." })} />
          {errors.StreetNumber && errors.StreetNumber.type === "required" && <small className='text-danger'>This field is required</small>}
        </div>

        <div className='p-1'>
          <label htmlFor='img' className=''>img:*</label>
          <input id='img' className='form-control' {...register("img", { required: "This field is required." ,minLength:2})} />
          {errors.img && errors.img.type === "required" && <small className='text-danger'>This field is required</small>}
          {errors.img && errors.img.type === "minLength" && <small className='text-danger'>minLength is 2.</small>}
        </div>

        <div className='p-1 mb-2'>
          <label htmlFor='email'>Email:*</label>
          <input id='email' className='form-control col-md-6' {...register("email", { required: true, pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, })} />
          {errors.email && errors.email.type === "required" && <small className='text-danger'>This field is required</small>}
          {errors.email && errors.email.type === "pattern" && <small className='text-danger'>Email Not Valid.</small> }
        </div>
     </div>
      <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button type="submit" className="btn btn-primary">Save changes</button>
          </div>
    </form>
  );
}

export default AddUserForm;