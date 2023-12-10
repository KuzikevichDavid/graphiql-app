import { RouteObject, createBrowserRouter } from 'react-router-dom';
import RootLayout from '../layouts/RootLayout';
import WelcomePage from '../pages/welcome/WelcomePage';
import Routes from './routes';
import LoginPage from '../pages/login/LogInPage';

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
        path: Routes.Login,
        element: <LoginPage />,
      },
    ],
  },
];

const router = createBrowserRouter(routes);

export default router;
