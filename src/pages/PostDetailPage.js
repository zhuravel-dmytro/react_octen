import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {postService} from "../services/postService";
import {set} from "react-hook-form";
import InfoPost from "./informationPage/InfoPost";

const PostDetailPage = () => {
    const {id} = useParams();
    const [post, setPost] = useState(null);

    useEffect(()=> {
        postService.getById(id).then(value => setPost({...value}))
    },[id])

   const getPost = (post) => {
        setPost(post)
    }
    return (
        <>
            <div>
                {post && (
                    <div>
                        <div>{post.id}</div>
                        <div>{post.title}</div>
                        <div>{post.body}</div>
                        <button onClick={()=>getPost(post)}>детальніше</button>
                    </div>

                )}
            </div>
            {post && <InfoPost post={post}/>}
        </>
    );
};

export default PostDetailPage;