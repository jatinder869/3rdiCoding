import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

/** To render virtual DOM App on index html with id root*/
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);