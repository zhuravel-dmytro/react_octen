import React from 'react';

const Post = ({post: {title}}) => {
    return (
        <div>
            <div>{title}</div>
        </div>
    );
};

export default Post;