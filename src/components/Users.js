import React, {useEffect, useState} from 'react';

import {urls} from "../configs/Urls";
import {userService} from "../services/UserServices";

const Users = () => {
const [user,setUser] = useState([])
    useEffect( () => {
            userService.getAll()
            .then(value => {
                setUser(value)
            })
        }, [])


    let getDetails = (id)=>{
        console.log(id)
    }
    return (
        <div>
            <h1>USERS</h1>
            {
                user.map(value =>
                    <div key={value.id}>{value.id} {value.name}
                             <button className='btnGetDetails' onClick={()=>getDetails(value.id)}>Get Details</button>
                    </div>)
            }
        </div>
    );
};

export default Users;