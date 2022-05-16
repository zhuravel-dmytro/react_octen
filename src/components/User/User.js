import React from 'react';

const User = ({user}) => {
    const {id,name} = user;

    return (
        <div>
           <div className='wrap'>
               <div>{id}) {name}</div>
           </div>

        </div>
    );
};

export default User;