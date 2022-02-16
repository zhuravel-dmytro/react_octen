import React, {useEffect, useState} from 'react';



import Users from "./components/Users/Users";
import Details from "./components/UserDetails/Details";
import Posts from "./components/Posts/Posts";



function App() {
const [user,setUser] = useState(null);
    const getUser = (user) => {
        setUser(user)
    }
    return (
        <div>
            <div>
                <Users getUser={getUser}/>
                <Details user={user}/>
            </div>
            <Posts/>
        </div>
    );
}
export default App;