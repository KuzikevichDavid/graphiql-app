import { RootState, setupStore } from '@/store/store';
import { Provider } from 'react-redux';

function TestProvider({
  children,
  initialState = undefined,
}: {
  children: React.ReactNode;
  initialState?: RootState;
}) {
  return <Provider store={setupStore(initialState)}>{children}</Provider>;
}

export default TestProvider;
