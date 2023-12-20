import { NavLink } from 'react-router-dom';

import classes from './ActionsNavigation.module.css';

function ActionsNavigation() {
  return (
    <header className={classes.header}>
      <nav>
        <ul className={classes.list}>
          <li>
            <NavLink
              to="/actions"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
              end
            >
              All Actions
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/actions/new"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              New Action
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default ActionsNavigation;
