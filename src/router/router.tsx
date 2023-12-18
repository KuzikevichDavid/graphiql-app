import { RouteObject, createBrowserRouter } from 'react-router-dom';
import NotFound from '@/pages/404/NotFound';
import RootLayout from '../layouts/RootLayout';
import Routes from './routes';
import WelcomePage from '../pages/welcome/WelcomePage';
import SignUpPage from '../pages/sign-up-page/SignUpPage';
import SignInPage from '../pages/sign-in-page/SignInPage';

const routes: RouteObject[] = [
  {
    path: Routes.Home,
    element: <RootLayout />,
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
      {
        path: Routes.NotFound,
        element: <NotFound />,
      },
    ],
  },
];

const router = createBrowserRouter(routes);

export default router;
