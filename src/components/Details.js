import React, {useEffect, useState} from 'react';


import {userService} from "../services/UserServices";



const Details = () => {
    const [user,setUser] = useState([])
    useEffect(()=>{
        userService.getAll()
            .then(value => {
                setUser()
            })
    },[])
    return (
        <div>

        </div>
    );
};

export default Details;