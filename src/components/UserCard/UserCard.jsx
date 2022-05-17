import React from "react";
import { Link, generatePath } from "react-router-dom";

export default function UserCard({ id, first_name, last_name, avatar, email, onDelete, onEdit }) {

  const deleteUser = () => {
    onDelete(id);
  }

  const editUser = () => {
    onEdit({id, first_name, last_name, avatar, email})
  }

  return (

    <figure key={id} className="card">
      <Link className='text-link' to={generatePath("/:id", { id: id })}>
        <h2> {first_name} {last_name}</h2>
        <img src={!avatar ? avatar = './assets/default.png' : avatar} alt={first_name} />
      <h4>Email: {email}</h4>
      </Link>
      <div>
        <button className="btn" onClick={editUser}>Edit</button>
        <button className="btn" onClick={deleteUser}>Delete</button>
      </div>
    </figure>
  );
}
