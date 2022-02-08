import React, {useEffect, useState} from 'react';

const User = () => {

    const [users, setUsers] = useState([])

    useEffect( () => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(value => value.json())
            .then(value => {
                setUsers(value);
            })
    }, [])
    return (
        <div>
                <ul>
                    {users.map(value => <li>{value.name}</li>)}
                </ul>
        </div>
    );
};

export default User;