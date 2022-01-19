import React from 'react';
import ReactDOM from 'react-dom';

import './index.sass';
import App from './App';
import { AuthContextProvider } from './store/AuthContext';

ReactDOM.render(
  <AuthContextProvider>
    <App />
  </AuthContextProvider>,
  document.getElementById('root'),
);
