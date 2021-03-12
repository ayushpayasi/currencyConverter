import React from 'react'
import {Button, TextField, Typography} from '@material-ui/core'
import { useHistory } from "react-router-dom";

export default function Login(props) {
    const loginData = JSON.parse(localStorage.getItem("loginData"))
    const history = useHistory()
    const loginHandler =(event)=>{
        const username= document.getElementById("username").value
        const password = document.getElementById("password").value
        let flag = false;
        for(var i = 0; i < loginData.length;i+=1){
            if(loginData[i].username === username && loginData[i].password === password){
                flag = true
            }
        }
        if (flag){
            console.log("enjoy")
            props.setLogin(true)
            history.push("/")
        }
        else{
            alert("username or password is incorrect")
        }
    }


    return (
        <div className="login-container">
            <div className="login_box">
                <Typography variant="h4" style={{color:"white"}}> Currency Converter</Typography>
                <TextField id="username" label="Username" color="secondary"></TextField>
                <TextField id="password" label="Password" color="secondary"></TextField>
                <Button onClick={(event)=>{loginHandler(event)}}style={{color:"white"}} variant="outlined"> Login </Button>
            </div>

        </div>
    )
}
