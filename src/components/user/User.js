import React from 'react';

import css from './User.css'
import {Link} from "react-router-dom";
const User = ({user:{name, id}}) => {
    return (
        <div className={'wrapp'}>
            <div>{id}</div>
            <Link to={id.toString()}>{name}</Link>
        </div>
    );
};

export default User;