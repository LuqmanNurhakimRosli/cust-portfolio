import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { DarkModeProvider } from './components/DarkModeContext';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <DarkModeProvider>
      <App />
    </DarkModeProvider>
  </React.StrictMode>
);
