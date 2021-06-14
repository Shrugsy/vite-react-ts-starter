import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Provider } from 'react-redux';
import { StrictMode } from 'react';

import { setUpStore } from '@/store';
import { createHandlers } from '@/_mocks/handlers';

import App from '../App';

import { mswTestServer } from './__setup__';

function setUpApp() {
  mswTestServer.use(...createHandlers());
  const store = setUpStore();

  render(
    <StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </StrictMode>
  );
}

describe('App test', () => {
  it('Has a counter', () => {
    // [SETUP] - set up app
    setUpApp();

    // [ASSERT] - should have a 'count' button - grab it
    const countBtn = screen.getByRole('button', { name: /count/i });

    // [ASSERT] - count should be 0
    screen.getByRole('button', { name: /count is: 0/i });

    // [ACTION] - click the count button
    userEvent.click(countBtn);

    // [ASSERT] - count should be 1
    screen.getByRole('button', { name: /count is: 1/i });

    // [ACTION] - click the count button
    userEvent.click(countBtn);

    // [ASSERT] - count should be 2
    screen.getByRole('button', { name: /count is: 2/i });
  });

  it('Loads a project', async () => {
    // [SETUP] - set up app
    setUpApp();

    // [ASSERT] - eventually loads projects
    screen.getByText(/projects:/i);
    await screen.findByText(/Successfully fetched projects!/i);
    await screen.findByText(/2021-04-01/i);
  });
});
