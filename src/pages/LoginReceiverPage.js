import PageContent from '../components/PageContent';
import { useSearchParams } from 'react-router-dom';

function LoginReceiverPage() {
  let [searchParams, setSearchParams] = useSearchParams();
 //http://localhost:3000/login-receiver?token=ya29.a0AfB_byBZyLF9H-uL5HWNV7lEALZKThGDe5AZLSP4cvmWG5qz46KOeIN2Ad9Ljqyi8S88UlcaId65-oPa2R03qtFEy1i3U5ehqWibyomczQP4SU0R7YbvsSgFXeGLXUEKLs051TDbDLKyz_QtO2M50Vnuu6UDHNdoVIYwaCgYKASQSARMSFQHGX2Mi9brm5PjQZ8tPzKhdAfXiXA0171&email=nielschristiannielsen@gmail.com
  var token = searchParams.get("token");
  var email = searchParams.get("email");

  localStorage.setItem("token", token);
  localStorage.setItem("email", email);

  return (
    <PageContent title="Logged in!">
      <div>
        {email} is logged in
      </div>
    </PageContent>
  );
}

export default LoginReceiverPage;

export async function action() {

}
