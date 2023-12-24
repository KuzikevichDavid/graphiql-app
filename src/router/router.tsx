import { RouteObject, createBrowserRouter } from 'react-router-dom';
import SignInPage from '../pages/sign-in-page/SignInPage';
import SignUpPage from '../pages/sign-up-page/SignUpPage';
import WelcomePage from '../pages/welcome/WelcomePage';
import ProtectedRoutes from './ProtectedRoutes';
import Routes from './routes';

const routes: RouteObject[] = [
  {
    path: '/',
    element: <ProtectedRoutes />,
    children: [
      {
        index: true,
        element: <WelcomePage />,
      },
      {
        path: Routes.SignUp,
        element: <SignUpPage />,
      },
      {
        path: Routes.SignIn,
        element: <SignInPage />,
      },
    ],
  },
];

const router = createBrowserRouter(routes);

export default router;
