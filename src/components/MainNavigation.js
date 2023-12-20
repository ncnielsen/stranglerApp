import { NavLink } from 'react-router-dom';

import classes from './MainNavigation.module.css';
import Login from './LoginButton';

function MainNavigation() {
  return (
    <header className={classes.header}>
      <nav>
        <ul className={classes.list}>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
              end
            >
              Account overview
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/actions"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              Suggested Actions
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/options-explorer"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              Options Explorer
            </NavLink>
          </li>
        </ul>
      </nav>
      <Login />
    </header>
  );
}

export default MainNavigation;
