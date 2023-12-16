export interface CustomError {
  message: string;
}

export enum RequestStatus {
  IDLE = 'IDLE',
  LOADING = 'LOADING',
  COMPLETED = 'COMPLETED',
  FAILED = 'FAILED',
}

export interface AuthState {
  session: Session | null;
  signInError: CustomError | null;
  signInStatus: RequestStatus;
  signUpError: CustomError | null;
  signUpStatus: RequestStatus;
  signOutError: CustomError | null;
  signOutStatus: RequestStatus;
}

export interface User {
  id: string;
  username: string;
  email: string;
}

export interface Session {
  access_token: string;
  token_type: string;
  expires_in: number;
  refresh_token: string;
  user: User;
  expires_at?: number;
}

export enum AuthCallTypes {
  SIGN_IN = 'signInStatus',
  SIGN_UP = 'signUpStatus',
  SIGN_OUT = 'signOutStatus',
}
