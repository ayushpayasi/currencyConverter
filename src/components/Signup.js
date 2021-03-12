import React from 'react'
import {Button, TextField, Typography} from '@material-ui/core'
import {useHistory} from "react-router-dom"

export default function Signup(props) {
    const history = useHistory();
    const signupHandler =(event)=>{
        const loginData = JSON.parse(localStorage.getItem("loginData"))
        const username= document.getElementById("signusername")
        const password = document.getElementById("signpassword")
        const confirmPassword= document.getElementById("signconfirmpassword")
        if (username.value === ""){
            alert("username cannot be null")
            return
        }
        if (password.value === ""){
            alert("password cannot be null")
            return
        }
        if (confirmPassword.value === ""){
            alert("password cannot be null")
            return
        }
        if(password.value !== confirmPassword.value){
            alert("passwords Do not match")
            password.value=""
            confirmPassword.value =""
        }
        else{
            loginData.push({
                "username":username.value,
                "password":password.value
            })

            console.log(JSON.stringify(loginData))
            localStorage.setItem("loginData",JSON.stringify(loginData))
            props.setLogin(true)
            
            history.push("/")
        }
    }
    return (
        <div className="login-container">
            <div className="login_box">
                <Typography variant="h4" style={{color:"white"}}> Currency Converter</Typography>
                <TextField id="signusername" label="Username" color="secondary"></TextField>
                <TextField id="signpassword" label="Password" color="secondary"></TextField>
                <TextField id="signconfirmpassword" label="Confirm Password" color="secondary"></TextField>
                <Button onClick={(event)=>{signupHandler(event)}}style={{color:"white"}} variant="outlined"> signup </Button>
            </div>

        </div>
    )
}
