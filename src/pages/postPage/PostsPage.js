import React, {useEffect, useState} from 'react';
import {postService} from "../../services/postService";
import Post from "../../components/post/Post";
import {Outlet} from "react-router-dom";

const PostsPage = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        postService.getAll().then(value => setPosts([...value]))
    },[])
    return (
        <div>
            {posts.map(post => <Post key={post.id} post={post}/>)}
            <div>
                <Outlet/>
            </div>
        </div>
    );
};

export default PostsPage;