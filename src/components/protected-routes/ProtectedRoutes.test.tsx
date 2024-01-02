import App from '@/App';
import { RequestStatus } from '@/types/auth';
import wrappedRender from '@/utils/testUtils/wrappedRender';
import { screen, waitFor } from '@testing-library/react';

describe('ProtectedRoutes', () => {
  it('should redirect to sign in page if user is not logged in or signin status is not completed', async () => {
    const initialState = {
      session: null,
      signInError: null,
      signInStatus: RequestStatus.FAILED,
      signUpError: null,
      signUpStatus: RequestStatus.IDLE,
      signOutError: null,
      signOutStatus: RequestStatus.IDLE,
    };
    wrappedRender(<App />, {
      initialEntries: ['/app'],
      initialState: {
        auth: initialState,
      },
    });
    await waitFor(async () => {
      const h1 = await screen.findByRole('heading', { level: 1 });
      expect(h1.textContent).toBe('Sign in');
    });
  });
});
