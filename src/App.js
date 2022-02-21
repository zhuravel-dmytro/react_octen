import React, {useEffect, useState} from 'react';



import Users from "./components/Users/Users";
import Details from "./components/UserDetails/Details";
import Posts from "./components/Posts/Posts";
import {userService} from "./services/UserServices";
import {axiosServices} from "./services/axiosServices";
import {postsServices} from "./services/PostsServices";


function App() {
const [user,setUser] = useState(null);
const [userId, setUserId] = useState(null);
const [posts, setPosts] = useState([]);
    const getUser = (user) => {
        setUser(user)
    }

    const getUserId = (id) => {
    postsServices.getByUserId(id).then(value => setPosts(...value))
    }
    return (
        <div>
            <div className="wrap">
                <Users getUser={getUser}/>
                {user && <Details user={user} getUserId={getUserId}/>}
            </div>
            <Posts posts={posts}/>
        </div>
    );
}
export default App;