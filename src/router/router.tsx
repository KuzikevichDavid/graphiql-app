import RootLayout from '@/layouts/RootLayout';
import NotFoundPage from '@/pages/404/NotFound';
import GraphiqlAppPage from '@/pages/graphiql-app-page/GraphiqlAppPage';
import SignInPage from '@/pages/sign-in-page/SignInPage';
import { RouteObject, createBrowserRouter } from 'react-router-dom';
import SignUpPage from '../pages/sign-up-page/SignUpPage';
import WelcomePage from '../pages/welcome/WelcomePage';
import ProtectedRoutes from './ProtectedRoutes';
import Routes from './routes';

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
        element: <ProtectedRoutes />,
        children: [
          {
            path: Routes.SignUp,
            element: <SignUpPage />,
          },
          {
            path: Routes.SignIn,
            element: <SignInPage />,
          },
          {
            path: Routes.App,
            element: <GraphiqlAppPage />,
          },
        ],
      },
      {
        path: Routes.NotFound,
        element: <NotFoundPage />,
      },
    ],
  },
];

const router = createBrowserRouter(routes);

export { router, routes };
