import React from 'react';
import {useEffect,useState} from "react";


import User from "../User/User";
import {userService} from "../../services/UserServices";


const Users = ({ getUser}) => {
    const [users, setUsers] = useState([])
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(value => value.json())
            .then(value => {
               setUsers(value)
            })
    }, [])
    return (
        <div>
            <div>
                {users.map(user => <User key={user.id} user={user} getUser={getUser}/>)}
            </div>
        </div>
    );
};

export default Users;