import React from "react";
import { Link, generatePath } from "react-router-dom";

export default function UserCard({ id, first_name, last_name, avatar, email, onDelete }) {

  const deleteUser = () => {
    onDelete(id);
  }

  return (

    <figure key={id} className="card">
      <Link to={generatePath("/:id", { id: id })}>
        <h2> {first_name} {last_name}</h2>
        <img src={!avatar ? avatar = './assets/default.png' : avatar} alt={first_name} />
      </Link>
      <h4>Email: {email}</h4>
      <div>
        <button className="btn">Edit</button>
        <button className="btn" onClick={deleteUser}>Delete</button>
      </div>
    </figure>
  );
}
