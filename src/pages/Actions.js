import { Suspense } from 'react';
import { useLoaderData, json, defer, Await } from 'react-router-dom';

import ActionsList from '../components/ActionsList';

function ActionsPage() {
  const { events } = useLoaderData();

  return (
    <Suspense fallback={<p style={{ textAlign: 'center' }}>Loading...</p>}>
      <Await resolve={events}>
        {(loadedEvents) => <ActionsList events={loadedEvents} />}
      </Await>
    </Suspense>
  );
}

export default ActionsPage;

async function loadActions() {
  const response = await fetch('http://localhost:8080/events');

  if (!response.ok) {
    // return { isError: true, message: 'Could not fetch events.' };
    // throw new Response(JSON.stringify({ message: 'Could not fetch events.' }), {
    //   status: 500,
    // });
    throw json(
      { message: 'Could not fetch actiions.' },
      {
        status: 500,
      }
    );
  } else {
    const resData = await response.json();
    return resData.events;
  }
}

export function loader() {
  return defer({
    events: loadActions(),
  });
}
