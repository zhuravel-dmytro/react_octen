import React from 'react';

const Posts = ({ posts}) => {
    return (
        <div>
            {posts.map(posts => <Post key={post.id} post={post}/>)}
        </div>
    );
};

export default Posts;