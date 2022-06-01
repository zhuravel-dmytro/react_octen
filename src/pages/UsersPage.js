import React, {useEffect, useState} from 'react';
import {userService} from "../services/userService";
import User from "../components/user/User";

const UsersPage = () => {
    const [users,setUsers] = useState([]);
    useEffect(()=>{
        userService.getAll().then(value => [...value])
    },[])
    return (
        <div>
            {users.map(user => <User key={user.id} post={user}/>)}
        </div>
    );
};

export default UsersPage;