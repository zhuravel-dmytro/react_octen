import React from 'react';
import {Link} from "react-router-dom";

const User = ({user:{name, id}}) => {
    return (
        <div className={'wrapp'}>
            <Link to={id.toString()}>{name}</Link>
        </div>
    );
};

export default User;