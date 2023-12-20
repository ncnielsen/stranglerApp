import Login from '../components/LoginButton';
import PageContent from '../components/PageContent';

function OptionsExplorerPage() {
  return (
    <PageContent title="Awesome Options Explorer!">
      <Login />
    </PageContent>
  );
}

export default OptionsExplorerPage;

export async function action({ request }) {
  const data = await request.formData();
  const email = data.get('email');

  // send to backend newsletter server ...
  console.log(email);
  return { message: 'Options explored successful!' };
}
