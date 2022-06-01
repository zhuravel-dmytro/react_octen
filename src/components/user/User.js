import React from 'react';
import {Link} from "react-router-dom";

const User = ({user:{name, id}}) => {
    return (
        <div className={'wrapp'}>
            {/*<div>{id}</div>*/}
            <Link to={id.toString()}>{name}</Link>
        </div>
    );
};

export default User;