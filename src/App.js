
import './App.css';
import {useEffect} from "react";
import User from "./components/User";
import Posts from "./components/Posts";


function App() {
  return (
      <div>
          {<User/>}
          {<Posts/>}

      </div>
  );
}

export default App;
