import App from '@/App';
import { RequestStatus } from '@/types/auth';
import wrappedRender from '@/utils/testUtils/wrappedRender';
import { Session } from '@supabase/supabase-js';
import { screen } from '@testing-library/react';

describe('SignUpPage', () => {
  it('should redirect to home page if user is logged in', () => {
    const mockSession: Session = {
      access_token: 'mock-token',
      expires_at: 1703957503,
      expires_in: 3600,
      refresh_token: 'wvRvY4ACKr75bgOgbZQcJQ',
      token_type: 'bearer',
      user: {
        id: 'bdc59735-44c7-4e46-98ea-d30436bd3b21',
        app_metadata: {},
        user_metadata: {},
        aud: 'authenticated',
        created_at: '2022-03-03T15:55:03.000Z',
      },
    };
    const initialState = {
      session: mockSession,
      signInError: null,
      signInStatus: RequestStatus.IDLE,
      signUpError: null,
      signUpStatus: RequestStatus.IDLE,
      signOutError: null,
      signOutStatus: RequestStatus.IDLE,
    };
    wrappedRender(<App />, {
      initialEntries: ['/signup'],
      initialState: {
        auth: initialState,
      },
    });
    const h1 = screen.getByRole('heading', { level: 1 });
    expect(h1.textContent).toBe('You Are Welcome');
  });
});
