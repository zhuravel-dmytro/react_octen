import React from 'react';
import {useEffect,useState} from "react";


import User from "../User/User";
import {userService} from "../../services/UserServices";


const Users = ({ getUser,users}) => {

    return (
        <div>
            <div>
                {users.map(user => <User key={user.id} user={user} getUser={getUser}/>)}
            </div>
        </div>
    );
};

export default Users;