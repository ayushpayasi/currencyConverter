import './App.css';
import Taskbar from './components/taskbar'
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import Login from "./components/Login"
import Signup from "./components/Signup"
import Main from './components/main'
import React,{useState,useEffect} from "react"
import LoginData from './assets/login.json'

function App() {
  const[isLogin,setIsLogin] = useState(false);
  const[userName,setUserName] = useState("");
  useEffect(() => {
    localStorage.setItem('loginData',JSON.stringify(LoginData))
    
  }, [])
  return (

    <Router>
      <Taskbar checkLogin={isLogin} userName = {userName} setLogin={setIsLogin}/>
      <Switch>
      <Route path="/" exact component={Main}/>
      <Route path="/signup" component={()=><Signup checkLogin={isLogin} setUserName={setUserName} setLogin={setIsLogin}/> }/>
      <Route path="/login" component={()=><Login checkLogin={isLogin} setUserName={setUserName} setLogin={setIsLogin} />}/>
      </Switch>
    </Router>
  );
}


export default App;
