import React, {useEffect, useState} from 'react';

const Posts = () => {
    let [posts, setPosts] = useState([])

    useEffect( () => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(value => value.json())
            .then(value => {
                setPosts(value);
            } )
    }, [])
    return (
        <div>
            <ul>
                {posts.map(value => <li>{value.body}</li>)}
            </ul>
        </div>
    );
};

export default Posts;