
import './App.css';
import {useEffect} from "react";
import User from "./components/User";
import Posts from "./components/Posts";
import Comment from "./components/Comment";


function App() {
  return (
      <div>
          <div className='wrap'>
              <div className='block u'>{<User/>} </div>
              <div className='block p'>{<Posts/>} </div>
              <div className='block'>{<Comment/>} </div>

          </div>


      </div>
  );
}

export default App;
