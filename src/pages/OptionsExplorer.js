import Login from '../components/LoginButton';
import PageContent from '../components/PageContent';
import { useLoaderData } from 'react-router-dom';
import { json } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
import ActionList from '../components/ActionsList';

function OptionsExplorerPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [fetchedEvents, setFetchedEvents] = useState();
  const [error, setError] = useState();
  
  useEffect(() => {
    async function fetchEvents() {
      setIsLoading(true);
      const response = await fetch('http://localhost:8080/events');

      if (!response.ok) {
        setError('Fetching events failed.');
      } else {
        const resData = await response.json();
        setFetchedEvents(resData.events);
      }
      setIsLoading(false);
    }

    fetchEvents();
  }, []);

  return (
    <PageContent title="Awesome Options Explorer!">
    <>
      <div style={{ textAlign: 'center' }}>
        {isLoading && <p>Loading...</p>}
        {error && <p>{error}</p>}
      </div>
      {!isLoading && fetchedEvents && <ActionList events={fetchedEvents} />}
    </>

    </PageContent>
  );
}

export default OptionsExplorerPage;

export async function action({ request }) {
  const response = await fetch('http://localhost:8080/events');
  console.log("options explorer loader");

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
