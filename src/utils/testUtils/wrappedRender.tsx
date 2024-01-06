import LocalizationContextProvider from '@/contexts/localization/LocalizationContextProvider';
import theme from '@/styles/theme';
import { ThemeProvider } from '@emotion/react';
import { render } from '@testing-library/react';
import React, { ReactElement } from 'react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import { setupTestStore } from './provider';
import { IExtendedRenderOptions } from './types';

function wrappedRender(
  ui: ReactElement,
  options?: Omit<IExtendedRenderOptions, 'wrapper'>
) {
  const store = setupTestStore(options?.initialState);

  function Wrapper({ children }: { children: React.ReactNode }) {
    return (
      <React.StrictMode>
        <ThemeProvider theme={theme}>
          <Provider store={store}>
            <LocalizationContextProvider>
              <MemoryRouter initialEntries={options?.initialEntries ?? ['/']}>
                {children}
              </MemoryRouter>
            </LocalizationContextProvider>
          </Provider>
        </ThemeProvider>
      </React.StrictMode>
    );
  }
  return { store, ...render(ui, { wrapper: Wrapper, ...options }) };
}

export default wrappedRender;
