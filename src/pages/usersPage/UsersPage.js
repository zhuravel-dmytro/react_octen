import React, {useEffect, useState} from 'react';

import {userService} from "../../services/userService";
import User from "../../components/user/User";
import css from './usersPage.css'

const UsersPage = () => {
    const [users,setUsers] = useState([]);
    useEffect(()=>{
        userService.getAll().then(value => setUsers ([...value]))
    },[])
    return (
        <div className={'usersPage'}>
            {users.map(user => <User key={user.id} user={user}/>)}
        </div>
    );
};

export default UsersPage;