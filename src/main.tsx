import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from '@mui/material';
import { Provider } from 'react-redux';
import App from './App';
import LocalizationContextProvider from './contexts/localization/LocalizationContextProvider';
import './index.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import theme from './styles/theme';
import setupStore from './store/store';

const store = setupStore();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <LocalizationContextProvider>
          <App />
        </LocalizationContextProvider>
      </Provider>
    </ThemeProvider>
  </React.StrictMode>
);
