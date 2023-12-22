import AuthProvider from '@/store/auth/AuthProvider';
import { RouteObject, createBrowserRouter } from 'react-router-dom';
import RootLayout from '../layouts/RootLayout';
import SignInPage from '../pages/sign-in-page/SignInPage';
import SignUpPage from '../pages/sign-up-page/SignUpPage';
import WelcomePage from '../pages/welcome/WelcomePage';
import Routes from './routes';

const routes: RouteObject[] = [
  {
    path: Routes.Home,
    element: (
      <AuthProvider>
        <RootLayout />
      </AuthProvider>
    ),
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
