import React, {useEffect, useState} from 'react';
import {Outlet} from "react-router-dom";


import {userService} from "../../services/userService";
import User from "../../components/user/User";


const UsersPage = () => {
    const [users,setUsers] = useState([]);

    useEffect(()=>{
        userService.getAll().then(value => setUsers ([...value]))
    },[])

    return (
        <div>
            <div className={'usersPage'}>
                {users.map(user => <User key={user.id} user={user}/>)}
            </div>
            <div>
                <Outlet/>
            </div>
        </div>

    );
};

export default UsersPage;