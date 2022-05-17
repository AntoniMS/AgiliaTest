import React, { useEffect, useState } from "react";
import "./AddUser.scss";

const defaultForm = {
    id: null,
    first_name: '',
    last_name: '',
    email:'',
    avatar:''
  }

const AddUser = ({ onAdd, onEdit, user, onStopEdit }) => {
    const [form, setForm] = useState({...defaultForm})

    useEffect(() => {
      if (user) {
          setForm(user)
      } else {
        setForm(defaultForm)
      }
    }, [user])

    const handleChange = (e) => {
      setForm({
        ...form,
        [e.target.name]: e.target.value
      })
    }
    
    const handleOnSubmit = (e) => {
        if (e) {
          e.preventDefault();
        }
        if (user) {
          onEdit(user.id, e.target.first_name.value, e.target.last_name.value, e.target.avatar.value, e.target.email.value);
          onStopEdit();
        } else {
          onAdd(e.target.first_name.value, e.target.last_name.value, e.target.avatar.value, e.target.email.value);
        }
        setForm(defaultForm)
    }

    const handleReset = () => {
      onEdit(user.id, user.first_name, user.last_name, user.avatar, user.email);
      setForm(defaultForm)
      onStopEdit();
    }

    return (
        <div className="c-form">
            <form onSubmit={handleOnSubmit}>
                <h2>{ user ? 'Edit User' : 'Create User' }</h2>
                <div>
                <input type="text" placeholder="First Name" name="first_name" onChange={handleChange} value={form.first_name} required/>
                <input type="text" placeholder="Last Name" name="last_name" onChange={handleChange} value={form.last_name} required/>
                </div>
                <div>
                <input type="text" placeholder="Email" name="email" onChange={handleChange} value={form.email} required/>
                <input type="text" placeholder="Avatar"  name="avatar" onChange={handleChange} value={form.avatar}/>
                </div>
                  { user ? <input type='reset' value='Back' onClick={handleReset}></input> : ''}
                <button className="btn" onSubmit={handleOnSubmit}>{ user ? 'Edit User' : 'Create User' }</button>
            </form>
        </div>
    );
};

export default AddUser;
