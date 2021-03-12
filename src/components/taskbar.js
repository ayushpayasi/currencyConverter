import React from 'react'
import {AppBar,Button,IconButton,Toolbar,Typography,makeStyles} from "@material-ui/core"
import HomeIcon from '@material-ui/icons/Home';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import {Link} from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    title: {
      flexGrow: 1,
    },
  }));
  
export default function Taskbar(props) {
    const classes = useStyles();

    return (
        <div>
        <AppBar position="static">
          <Toolbar>
              <Link style={{textDecoration:"none",color:"white"}} to="/">
            <IconButton  edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
              <HomeIcon />
            </IconButton>
            </Link>

            <Typography variant="h6" className={classes.title}>
              Currency Converter
            </Typography>
            
            {props.checkLogin?
            <div>
                <Link style={{textDecoration:"none",color:"white"}} to="/"><Button onClick={()=>{props.setLogin(false)}}color="inherit">Sign Out</Button></Link>
                <IconButton  edge="start" className="account" color="inherit" aria-label="menu">
                  <AccountCircleIcon />
                </IconButton> 
            </div>:
            <div>
                <Link style={{textDecoration:"none",color:"white"}} to="/login"><Button color="inherit">Login</Button></Link>
                <Link style={{textDecoration:"none",color:"white"}} to="/signup"><Button color="inherit" >Signup</Button></Link>
            </div>}
          </Toolbar>
        </AppBar>

        </div>
    )
}
