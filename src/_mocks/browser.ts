import { setupWorker } from 'msw';

import { createHandlers } from './handlers';

export const worker = setupWorker(...createHandlers());
