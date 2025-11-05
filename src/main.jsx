import React from 'react';
import App from './App';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme';
import ReactDOM from 'react-dom/client';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
