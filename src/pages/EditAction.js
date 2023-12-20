import { useRouteLoaderData } from 'react-router-dom';

import ActionForm from '../components/ActionForm';

function EditActionPage() {
  const data = useRouteLoaderData('event-detail');

  return <ActionForm method="patch" event={data.event} />;
}

export default EditActionPage;
