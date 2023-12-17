import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { ThemeProvider } from '@mui/material';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './App';
import LocalizationContextProvider from './contexts/localization/LocalizationContextProvider';
import './index.css';
import theme from './styles/theme';
import { store } from './store/store';

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
