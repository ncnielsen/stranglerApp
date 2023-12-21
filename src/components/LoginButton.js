import { useEffect } from 'react';
import { useFetcher } from 'react-router-dom';
import { useState } from 'react';
import { GoogleLogin } from '@react-oauth/google';

import {
  useRouteLoaderData,
  json,
  redirect,
  defer,
  Await,
} from 'react-router-dom';


import classes from './LoginButton.module.css';

function Login() {
  
  let email = localStorage.getItem("email");
  let loggedIn = email && email.length > 0;

  return (
    <GoogleLogin 
      onSuccess={ (credentialResponse) => { 

        console.log(credentialResponse.credential);
      }}
      onError={ () => {
        console.log("logon failed")
      }}
    />


);
}



export default Login;
