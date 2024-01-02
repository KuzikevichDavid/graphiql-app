import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { ThemeProvider } from '@mui/material';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import LocalizationContextProvider from './contexts/localization/LocalizationContextProvider';
import './index.css';
import RootLayout from './layouts/RootLayout';
import { store } from './store/store';
import theme from './styles/theme';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <LocalizationContextProvider>
            <RootLayout>
              <App />
            </RootLayout>
          </LocalizationContextProvider>
        </Provider>
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);
