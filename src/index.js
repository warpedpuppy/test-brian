import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import App from './App';
import * as serviceWorker from './serviceWorkerRegistration';
import * as atatus from 'atatus-spa';

atatus.config('0f6f03e693674951abadc54720220097').install();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

serviceWorker.register();
