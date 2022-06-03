import {Routes, Route } from 'react-router-dom';
import React from 'react';

import UsersPage from "./pages/usersPage/UsersPage";
import PostsPage from "./pages/postPage/PostsPage";
import ErrorPage from "./pages/ErrorPage";
import Layout from "./components/layout/Layout";
import UserDetailPage from "./pages/UserDetailPage";
import PostDetailPage from "./pages/PostDetailPage";

const App = () => {
    return (
        <div>
            <Routes>
                <Route path={'/'} element={<Layout/>}>
                    <Route path={'users'} element ={<UsersPage/>}>
                        <Route path={':id'} element ={<UserDetailPage/>} />
                    </Route>
                    <Route path={'posts'} element ={<PostsPage/>}>
                        <Route path={':id'} element={<PostDetailPage/>}/>
                    </Route>
                    <Route path={'*'} element ={<ErrorPage/>} />
                </Route>

            </Routes>


        </div>

    );
};

export default App;