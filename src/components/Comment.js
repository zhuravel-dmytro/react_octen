import React, {useEffect, useState} from 'react';

const Comment = () => {

    let [comment, setComment] = useState([])

    useEffect( () => {
        fetch('https://jsonplaceholder.typicode.com/comments')
            .then(value => value.json())
            .then(value => {
                setComment(value);
            })
    }, [])
    return (
        <div>
            <ul>
                {comment.map(value => <li>{value.body}</li>)}
            </ul>
        </div>
    );
};

export default Comment;