import "./App.css";
import { useState, useEffect } from "react";
// import {submitHandler} from "./components/usernameForm"
import { UsernameForm } from "./components/usernameForm";
import Navbar from './components/Navbar'; 
import { Newsfeed } from "./components/newsfeed/newsfeed";
import { fetchPhotos, tokenFetch } from "./components/utils";
import Footer from "./components/Footer";

  const App = () => {
  const [user, setUser] = useState();
  const [img, setImg] = useState([]);


  useEffect(() => {
    tokenFetch(setUser);
    fetchPhotos(setImg);
  }, []);
  
  return (
    <div className="App">
      <div className="Navbar">
      <Navbar />
      </div>
      <div className="login">
        {/* {user ? <h1> {user} </h1> : <h1 className="Enter"> Enter Username </h1>} */}
        <div className="loginBox">
        {/* {!username ? <p>login</p> : } */}
       <UsernameForm setUser={setUser} />
        </div>
      </div>
      <Newsfeed />
      <Footer />
    </div>
  );
};

export default App;
