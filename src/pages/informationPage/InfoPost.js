import React from 'react';

const InfoPost = ({ post}) => {
    const [id,title] = post
    return (
        <div>
            <h1>коментарі поста</h1>
            <div>{id}</div>
            <div>{title}</div>
        </div>
    );
};

export default InfoPost;