import React from 'react';
import {NavLink, Outlet} from "react-router-dom";

import css from './Layout.css'
const Layout = () => {
    return (
        <div>
                <header className={'header'}>
                    <NavLink to="/users">users</NavLink>
                    <NavLink to="/posts">posts</NavLink>
                </header>
            <Outlet/>
        </div>
    );
};

export default Layout;