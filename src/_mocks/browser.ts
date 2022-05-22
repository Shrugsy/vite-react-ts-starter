import { setupWorker } from 'msw';

import { createHandlers } from './handlers';

export const getWorker = () => {
  return setupWorker(...createHandlers());
};
