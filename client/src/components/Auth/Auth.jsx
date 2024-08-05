import React, { useState } from 'react';
import { Avatar, Button, Container, Grid, Paper, Typography } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { GoogleLogin } from '@react-oauth/google';
import styles from './styles';
import Input from './Input';
import Icon from './icon';

import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';
import { signIn, signUp } from '../../actions/auth';

const Auth = () => {
  const [isSignup, setIsSignup] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: ""
  })

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    if(isSignup){
      dispatch(signUp(formData,navigate))
    }else{
      dispatch(signIn(formData,navigate))
    }
  };

  const handleChange = (e) => {  
    setFormData({ ...formData, [e.target.name]: e.target.value })
  };

  const handleShowPassword = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const switchMode = () => {
    setIsSignup((prevIsSignup) => !prevIsSignup);
    setShowPassword(false);
  };

  const googleSuccess = async (res) => {
    const token = res.credential
    const result = jwtDecode(token)

    try {
      dispatch({ type: "AUTH", data: { result } });
      navigate("/")
    } catch (error) {
      console.log(error)
    }
  };

  const googleFailure = (error) => {
    console.error("Google Sign In Error", error);
    console.log("Google Sign In was unsuccessful. Try again later.");
  };

  return (
    <Container component="main" maxWidth="xs">
      <Paper className={styles.paperStyled} elevation={3}>
        <Avatar className={styles.avatarStyled}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography variant='h5'>
          {isSignup ? "Sign Up" : "Sign In"}
        </Typography>
        <form className={styles.formStyled} onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            {isSignup && (
              <>
                <Input
                  name="firstName"
                  label="First Name"
                  handleChange={handleChange}
                  autoFocus
                  half
                />
                <Input
                  name="lastName"
                  label="Last Name"
                  handleChange={handleChange}
                  half
                />
              </>
            )}
            <Input
              name='email'
              label="Email Address"
              handleChange={handleChange}
              type='email'
            />
            <Input
              name='password'
              label="Password"
              handleChange={handleChange}
              type={showPassword ? "text" : "password"}
              handleShowPassword={handleShowPassword}
            />
            {isSignup && (
              <Input
                name='confirmPassword'
                label="Repeat Password"
                handleChange={handleChange}
                type='password'
              />
            )}
          </Grid>
          <Button
            type='submit'
            fullWidth
            variant='contained'
            color='primary'
            className={styles.submitButtonStyled}
          >
            {isSignup ? "Sign Up" : "Sign In"}
          </Button>
          <GoogleLogin
            onSuccess={googleSuccess}
            onError={googleFailure}>
            <Button
              className={styles.googleButtonStyled}
              color='primary'
              fullWidth
              variant='contained'
              startIcon={<Icon />}
            >
              Google Sign In
            </Button>
          </GoogleLogin>
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Button onClick={switchMode}>
                {isSignup
                  ? "Already have an account? Sign In"
                  : "Don't have an account? Sign Up"}
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Container>
  );
};

export default Auth;
