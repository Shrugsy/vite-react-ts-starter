import { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import { worker } from '@/_mocks/browser';
import { store } from '@/store';

import App from './App';
import './index.css';

async function run() {
  await worker.start();
  ReactDOM.render(
    <StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </StrictMode>,
    document.getElementById('root')
  );
}

run();
