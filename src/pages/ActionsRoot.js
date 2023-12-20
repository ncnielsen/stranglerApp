import { Outlet } from 'react-router-dom';

import ActionsNavigation from '../components/ActionsNavigation';

function ActionsRootLayout() {
  return (
    <>
      <ActionsNavigation />
      <Outlet />
    </>
  );
}

export default ActionsRootLayout;
