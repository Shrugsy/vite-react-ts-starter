import { setupServer } from 'msw/node';
import { beforeAll, afterEach, afterAll } from 'vitest';

import '@/_mocks/fetchPolyfill';

// leave registering handlers up to individual tests
export const mswTestServer = setupServer();

beforeAll(() => {
  mswTestServer.listen();
});

afterEach(() => {
  mswTestServer.resetHandlers();
});

afterAll(() => {
  mswTestServer.close();
});
