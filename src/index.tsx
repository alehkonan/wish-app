import React from 'react';
import ReactDOM from 'react-dom';
import StyledEngineProvider from '@mui/material/StyledEngineProvider';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <StyledEngineProvider injectFirst>
        <App />
      </StyledEngineProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorkerRegistration.register();
