import React from 'react';


import Users from "./components/Users/Users";
import Details from "./components/UserDetails/Details";
import Posts from "./components/Posts/Posts";



function App() {
    return (
        <div>
            <div>
                <Users/>
                <Details/>
            </div>
            <Posts/>
        </div>
    );
}
export default App;