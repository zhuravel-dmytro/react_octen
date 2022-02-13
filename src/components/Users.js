import React, {useEffect, useState} from 'react';


import {userService} from "../services/UserServices";

const Users = () => {
const [users,setUsers] = useState([])
    useEffect( () => {
            userService.getAll()
            .then(value => {
                setUsers(value)
            })
        }, [])


    let getUserId = (id)=>{
        console.log(getAll)
    }
    return (
        <div>
            <h1>USERS</h1>
            {
                users.map(value =>
                    <div key={value.id}>{value.id} {value.name}
                             <button className='btnGetDetails' onClick={()=>getDetails(value.id)}>Get Details</button>
                    </div>)
            }
        </div>
    );
};

export default Users;