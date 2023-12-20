import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import EditActionPage from './pages/EditAction';
import ErrorPage from './pages/Error';
import ActionDetailPage, {
  loader as eventDetailLoader,
  action as deleteEventAction,
} from './pages/ActionDetail';
import ActionsPage, { loader as actionsLoader } from './pages/Actions';
import ActionsRootLayout from './pages/ActionsRoot';
import AccountPage from './pages/Account';
import NewActionPage from './pages/NewAction';
import RootLayout from './pages/Root';
import { action as manipulateEventAction } from './components/ActionForm';
import OptionsExplorerPage, { action as newsletterAction } from './pages/OptionsExplorer';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <AccountPage /> },
      {
        path: 'actions',
        element: <ActionsRootLayout />,
        children: [
          {
            index: true,
            element: <ActionsPage />,
            loader: actionsLoader,
          },
          {
            path: ':eventId',
            id: 'event-detail',
            loader: eventDetailLoader,
            children: [
              {
                index: true,
                element: <ActionDetailPage />,
                action: deleteEventAction,
              },
              {
                path: 'edit',
                element: <EditActionPage />,
                action: manipulateEventAction,
              },
            ],
          },
          {
            path: 'new',
            element: <NewActionPage />,
            action: manipulateEventAction,
          },
        ],
      },
      {
        path: 'options-explorer',
        element: <OptionsExplorerPage />,
        action: newsletterAction,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
