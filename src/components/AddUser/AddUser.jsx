import React, {useState} from "react";

const defaultForm = {
    id: null,
    first_name: '',
    last_name: '',
    email:'',
    avatar:''
  }

const AddUser = ({ onAdd }) => {
    const [form, setForm] = useState({defaultForm})

    const handleChange = (e) => {
      setForm({
        ...form,
        [e.target.name]: e.target.value
      })
    }

    const handleReset = () => {
      setForm(defaultForm)
    }
    
    const handleOnSubmit = (e) => {
        if (e) {
          e.preventDefault();
        }
            onAdd(e.target.first_name.value, e.target.last_name.value, e.target.avatar.value, e.target.email.value);
            setForm(defaultForm)
    }

    return (
        <div>
            <form onSubmit={handleOnSubmit}>
                <h2>Create User</h2>
                <input type="text" placeholder="First Name" name="first_name" onChange={handleChange} value={form.first_name} required/>
                <input type="text" placeholder="Last Name" name="last_name" onChange={handleChange} value={form.last_name} required/>
                <input type="text" placeholder="Email" name="email" onChange={handleChange} value={form.email} required/>
                <input type="text" placeholder="Avatar"  name="avatar" onChange={handleChange} value={form.avatar}/>
                <input type='reset' value='Reset' onClick={handleReset}></input>
                <button onSubmit={handleOnSubmit}>Add User</button>
                <hr />
            </form>
        </div>
    );
};

export default AddUser;
