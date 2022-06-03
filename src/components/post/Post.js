import React from 'react';
import {Link} from "react-router-dom";

const Post = ({post: {id,title}}) => {
    return (
        <div>
            <div>
                <Link to={id.toString()}>{title}</Link>
            </div>
        </div>
    );
};

export default Post;