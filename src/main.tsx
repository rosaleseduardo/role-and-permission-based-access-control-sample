import React from 'react';
import ReactDOM from 'react-dom/client';
import { AuthorizationProvider } from '@components';

import App from './App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <AuthorizationProvider>
      <App />
    </AuthorizationProvider>
  </React.StrictMode>,
);
