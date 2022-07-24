import React from 'react'
import ReactDOM from 'react-dom/client'
import JournalApp from './JournalApp'
import { AppTheme } from './theme/AppTheme';
import './styles.css'


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
      <JournalApp />
  </React.StrictMode>
);
