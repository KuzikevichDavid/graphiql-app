import GraphiqlAppPage from '@/pages/graphiql-app-page/GraphiqlAppPage';
import SignInPage from '@/pages/sign-in-page/SignInPage';
import SignUpPage from '@/pages/sign-up-page/SignUpPage';
import WelcomePage from '@/pages/welcome/WelcomePage';
import { Route, Routes } from 'react-router-dom';
import ProtectedRoutes from './ProtectedRoutes';
import * as EnumRoutes from './routes';

function AppRoutes() {
  return (
    <Routes>
      <Route path={EnumRoutes.default.Home} element={<WelcomePage />} />
      <Route path={EnumRoutes.default.SignUp} element={<SignUpPage />} />
      <Route path={EnumRoutes.default.SignIn} element={<SignInPage />} />
      <Route element={<ProtectedRoutes />}>
        <Route path={EnumRoutes.default.App} element={<GraphiqlAppPage />} />
      </Route>
    </Routes>
  );
}

export default AppRoutes;
