import React from 'react';
import {logDOM} from "@testing-library/react";


import css from './User.css'

const User = ({user, getUser}) => {
    const {id,name} = user;

    return (
        <div>
           <div className='wrap'>
               <div>{id}) {name}</div>
               <div><button onClick={()=>getUser(user)}>Get Detalis</button></div>
           </div>

        </div>
    );
};

export default User;