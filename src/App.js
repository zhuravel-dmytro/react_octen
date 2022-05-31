import {Routes, Route} from 'react-router-dom';
import React from 'react';

import css from './App.css';
import UsersPage from "./pages/UsersPage";
import PostsPage from "./pages/PpostsPage";
import ErrorPage from "./pages/ErrorPage";

const App = () => {
    return (
        <div>
            <header className={'header'}>
                <a href="/">users</a>
                <a href="/posts">posts</a>
            </header>

            <Routes>
                <Route path={'/users'} element ={<UsersPage/>} />
                <Route path={'/posts'} element ={<PostsPage/>} />
                <Route path={'*'} element ={<ErrorPage/>} />
            </Routes>


        </div>

    );
};

export default App;