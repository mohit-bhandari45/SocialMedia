import { AppBar, Avatar, Button, Toolbar, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import styles from "./styles"
import memories from "../../images/memories.png"
import { Link, useNavigate,useLocation } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import { useDispatch } from 'react-redux';

const Navbar = () => {
    const [user, setUser] = useState(null)
    const dispatch=useDispatch()
    const navigate=useNavigate()
    const location=useLocation()

    useEffect(() => {
        const credential=JSON.parse(localStorage.getItem("profile"))
        if(credential){
            setUser(credential.result)
        }

        const token=user?.token
        if(token){
            const decodedToken=jwtDecode(token)
            if(decodedToken.exp*1000<new Date().getTime()){
                handleLogout()
            }
        }
    }, [location])

    const handleLogout=()=>{
        dispatch({type:"LOGOUT"})
        navigate("/")
        setUser(null)
    }

    return (
        <AppBar className={styles.appBar} position='static' color='inherit'>
            <div className={styles.brandContainer}>
                <Link to="/">
                    <Typography className={styles.heading} variant='h2' align='center'>Memories</Typography>
                </Link>
                <img className={styles.image} src={memories} alt="memories" height="60" />
            </div>
            <Toolbar className={styles.toolbar}>
                {user ? (
                    <div className={styles.profile}>
                        <Avatar className={styles.purple} alt={user.name} src={user.picture}>
                            {user.name.charAt(0)}
                        </Avatar>
                        <Typography style={{color:"black"}} text className={styles.userName} variant="h6">
                            {user.name}
                        </Typography>
                        <Button onClick={handleLogout} className={styles.logout} variant='contained' color='secondary'>Logout</Button>
                    </div>
                ) : (
                    <Link to="/auth">
                        <Button variant='contained' color='primary'>
                            Sign In
                        </Button>
                    </Link >
                )}
            </Toolbar>
        </AppBar>
    )
}

export default Navbar
