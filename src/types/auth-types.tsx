export interface AppOutputs {
  auth: Auth;
}

export interface CustomError {
  message: string;
}
export interface Session {
  access_token: string;
  token_type: string;
  expires_in: number;
  refresh_token: string;
  user: User;
  expires_at?: number;
}
export enum RequestStatus {
  IDLE = 'IDLE',
  LOADING = 'LOADING',
  COMPLETED = 'COMPLETED',
  FAILED = 'FAILED',
}

export interface User {
  id: string;
  email: string;
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

export enum AuthStatus {
  SIGN_IN = 'signInStatus',
  SIGN_UP = 'signUpStatus',
  SIGN_OUT = 'signOutStatus',
}

export interface SignInData {
  email: string;
  password: string;
}

export interface SignUpData {
  email: string;
  password: string;
}

export interface Auth {
  signIn(
    signInDto: SignInData
  ): Promise<{ session: Session | null; error: CustomError | null }>;

  signUp(signUpDto: SignUpData): Promise<{ error: CustomError | null }>;

  signOut(): Promise<{ error: CustomError | null }>;
}
