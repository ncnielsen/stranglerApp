// import { useLoaderData } from 'react-router-dom';
import { Link } from 'react-router-dom';

import classes from './ActionsList.module.css';

function ActionsList({events}) {
  // const events = useLoaderData();

  return (
    <div className={classes.events}>
      <h1>All Actions</h1>
      <ul className={classes.list}>
        {events.map((event) => (
          <li key={event.id} className={classes.item}>
            <Link to={`/actions/${event.id}`}>
              <img src={event.image} alt={event.title} />
              <div className={classes.content}>
                <h2>{event.title}</h2>
                <time>{event.date}</time>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ActionsList;
