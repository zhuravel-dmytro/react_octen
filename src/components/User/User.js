import React from 'react';

const User = ({user}) => {
    const {id,name, username, email} = user;

    return (
        <div>
           <div className='wrap'>
               <div>{id})-- {name} -- {username} -- {email} </div>
           </div>

        </div>
    );
};

export default User;