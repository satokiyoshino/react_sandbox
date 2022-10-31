import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from '@/App';

// reset css
import '@/styles/reset.scss';

if (process.env.NODE_ENV === 'development') {
  (async () => {
    const { worker } = await import('../mocks/browser');
    worker.start();
  })();
}

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
