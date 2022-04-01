import React from 'react';

const Post = ({ post: {id, userId, title, body}}) => {
    return (
        <div>
            <div>{id}</div>
            <div>{userId}</div>
            <div>{title}</div>
            <div>{body}</div>
        </div>
    );
};

export default Post;