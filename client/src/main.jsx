import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { Provider } from "react-redux"
import { configureStore } from "@reduxjs/toolkit"
import reducers from './reducers'
import "./index.css"
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { GoogleOAuthProvider } from '@react-oauth/google';

const store = configureStore({
  reducer: reducers,
})

const theme = createTheme({
  // theme settings
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <GoogleOAuthProvider clientId='761034467-111iu6jvp43lrjf8l3msu9tug506glan.apps.googleusercontent.com'>
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <App />
      </Provider>
    </ThemeProvider>  
  </GoogleOAuthProvider>
)



