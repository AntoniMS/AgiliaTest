import React from "react";

const Detail = ({ user }) => {

    return (
        <div className="container">
            <div className="card">
                <h1> {user.data.first_name} {user.data.last_name}</h1>
                <img className="detail" src={user.data.avatar} alt={user.data.first_name} />
                <h3>Email: {user.data.email}</h3>
            </div>
        </div>
    );
};

export default Detail;
