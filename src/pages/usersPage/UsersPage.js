import React, {useEffect, useState} from 'react';
import {Outlet} from "react-router-dom";


import {userService} from "../../services/userService";
import User from "../../components/user/User";

import css from "./usersPage.css";
import InfoPost from "../informationPage/InfoPost";
import InfoUser from "../informationPage/InfoUser";


const UsersPage = () => {
    const [users,setUsers] = useState([]);

    useEffect(()=>{
        userService.getAll().then(value => setUsers ([...value]))
    },[])

    return (
        <div className={'wrappAll'}>
            <div className={'usersPage'}>
                {users.map(user => <User key={user.id} user={user}/>)}
            </div>
            <div>
                <Outlet/>
            </div>
            <div>
                <InfoUser/>
            </div>
        </div>

    );
};

export default UsersPage;