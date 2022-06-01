import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {userService} from "../services/userService";

const UserDetailPage = () => {
    const {id} = useParams();
    const [user, setUser] = useState(null);

   useEffect(() => {
    userService.getById(id).then(value => setUser({...value}))
   },[])

    return (
        <div>
            {user && (
                <div>
                    <div>{user.id}</div>
                    <div>{user.name}</div>
                    <div>{user.username}</div>
                    <div>{user.email}</div>
                    <button>детальніше</button>
                </div>
            )}
        </div>
    );
};

export default UserDetailPage;