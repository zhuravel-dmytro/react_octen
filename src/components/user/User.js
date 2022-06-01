import React from 'react';

const User = ({user:{name}}) => {
    return (
        <div>
            <div>{name}</div>
        </div>
    );
};

export default User;