import LocalizationContextProvider from '@/contexts/localization/LocalizationContextProvider';
import theme from '@/styles/theme';
import { ThemeProvider } from '@emotion/react';
import { render } from '@testing-library/react';
import React, { ReactElement } from 'react';
import { MemoryRouter } from 'react-router-dom';
import { IExtendedRenderOptions } from './types';

function wrappedRender(
  ui: ReactElement,
  options?: Omit<IExtendedRenderOptions, 'wrapper'>
) {
  function Wrapper({ children }: { children: React.ReactNode }) {
    return (
      <React.StrictMode>
        <ThemeProvider theme={theme}>
          <LocalizationContextProvider>
            <MemoryRouter initialEntries={options?.initialEntries ?? ['/']}>
              {children}
            </MemoryRouter>
          </LocalizationContextProvider>
        </ThemeProvider>
      </React.StrictMode>
    );
  }
  return render(ui, { wrapper: Wrapper, ...options });
}

export default wrappedRender;
