/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { MSWToolbar } from '@stordco/msw-toolbar';
import { SetupWorkerApi } from 'msw';

import { store } from '@/store';

import App from './App';
import './index.css';

const isDev = process.env.NODE_ENV === 'development';

let worker: SetupWorkerApi;
const prepareWorker = async () => {
  if (isDev) {
    const { getWorker } = await import('@/_mocks/browser');
    worker = getWorker();
    return worker;
  }
};

const renderApp = () => {
  const container = document.getElementById('root');
  if (!container) {
    throw new Error('No root container found');
  }
  const root = createRoot(container);
  root.render(
    <StrictMode>
      <MSWToolbar worker={worker} apiUrl={`${window.location.origin}/api/`} isEnabled={isDev}>
        <Provider store={store}>
          <App />
        </Provider>
      </MSWToolbar>
    </StrictMode>
  );
};

prepareWorker().then(renderApp);
