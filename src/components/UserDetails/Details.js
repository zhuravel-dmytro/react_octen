import React from 'react';


const Details = ({ user, getUserId}) => {

    const {id, name, email, address:{street}} = user

    return (
        <div>
            <div>{id}</div>
            <div>{name}</div>
            <div>{email}</div>
            <div>{street}</div>
            <button onClick={()=> getUserId(id)}>Posts</button>
        </div>
    );
};

export default Details;