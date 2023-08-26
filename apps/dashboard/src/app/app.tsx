import {
  RouteObject,
  RouterProvider,
  createBrowserRouter,
} from 'react-router-dom';
import { RouterPath } from './pages/routes-path';
import { GeneralLayout } from './templates';
import {
  DashboardPage,
  DevicesPage,
  KiosksPage,
  LocationsPage,
  OrganisationPage,
  UsersPage,
} from './pages';
import { UserFormPage } from './pages/users/user-form.page';

export function App() {
  const privateRoutes: RouteObject[] = [
    {
      path: RouterPath.home,
      errorElement: <>error page</>,
      element: <GeneralLayout />,
      children: [
        {
          index: true,
          path: RouterPath.dashboard,
          element: <DashboardPage />,
        },
        {
          path: RouterPath.users,
          element: <UsersPage />,
        },
        {
          path: RouterPath.userDetails,
          element: <UserFormPage />,
        },
        {
          path: RouterPath.userNew,
          element: <UserFormPage />,
        },
        {
          path: RouterPath.organisation,
          element: <OrganisationPage />,
        },
        {
          path: RouterPath.kiosks,
          element: <KiosksPage />,
        },
        {
          path: RouterPath.locations,
          element: <LocationsPage />,
        },
        {
          path: RouterPath.devices,
          element: <DevicesPage />,
        },
      ],
    },
  ];

  const router = createBrowserRouter(privateRoutes);

  return <RouterProvider router={router} />;
}

export default App;
