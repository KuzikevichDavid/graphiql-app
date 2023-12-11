import { RouteObject, createBrowserRouter } from 'react-router-dom';
import RootLayout from '../layouts/RootLayout';
import WelcomePage from '../pages/welcome/WelcomePage';
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
    ],
  },
];

const router = createBrowserRouter(routes);

export default router;
