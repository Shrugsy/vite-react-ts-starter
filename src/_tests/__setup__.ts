import 'whatwg-fetch';
import { setupServer } from 'msw/node';

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
