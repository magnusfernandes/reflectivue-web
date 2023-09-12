import {
  RouteObject,
  RouterProvider,
  createBrowserRouter,
} from 'react-router-dom';
import { RouterPath } from './pages/routes-path';
import { GeneralLayout } from './templates';
import {
  DashboardPage,
  DeviceFormPage,
  DevicesPage,
  KiosksPage,
  LocationsPage,
  LoginPage,
  OrganisationPage,
  UsersPage,
} from './pages';
import { UserFormPage } from './pages/users/user-form.page';
import { useDispatch, useSelector } from 'react-redux';
import { closeSnackBar } from '../store/slice/toast/toast.slice';
import { RootState } from '../store/store';
import { Toast } from '@shared-ui';

export function App() {
  const snackbarState = useSelector((state: RootState) => state.snackbar);
  const dispatch = useDispatch();
  const handleCloseSnackBar = () => dispatch(closeSnackBar());

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
        {
          path: RouterPath.deviceNew,
          element: <DeviceFormPage />,
        },
      ],
    },
    {
      path: RouterPath.login,
      element: <LoginPage />,
    },
  ];

  const router = createBrowserRouter(privateRoutes);

  return (
    <>
      <RouterProvider router={router} />
      <Toast
        onClose={handleCloseSnackBar}
        isOpen={snackbarState.isOpen}
        message={snackbarState.message}
        type={snackbarState.snackbarType}
      />
    </>
  );
}

export default App;
