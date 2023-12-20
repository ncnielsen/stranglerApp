import { useEffect } from 'react';
import { useFetcher } from 'react-router-dom';

import classes from './LoginButton.module.css';

function Login() {
  const fetcher = useFetcher();
  const { data, state } = fetcher;

  useEffect(() => {
    if (state === 'idle' && data && data.message) {
      window.alert(data.message);
    }
  }, [data, state]);

  return (
    <fetcher.Form
      method="post"
      action="/newsletter"
      className={classes.newsletter}
    >
      <button>Login</button>
    </fetcher.Form>
  );
}

export default Login;