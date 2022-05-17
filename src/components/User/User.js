import React from 'react';

const User = ({user}) => {
    const {id,name, userName, email} = user;

    return (
        <div>
           <div className='wrap'>
               <div>{id})-- {name} -- {userName} -- {email} </div>
           </div>

        </div>
    );
};

export default User;