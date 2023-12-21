import { useEffect } from 'react';
import { useFetcher } from 'react-router-dom';
import { useState } from 'react';

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
    {loggedIn} ? (
      <div>{email}</div>
    ) :
    (
      <a href='https://localhost:44315/login/Login'>Login</a>
    )

);
}



export default Login;
