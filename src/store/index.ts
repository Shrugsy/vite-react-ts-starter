import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/dist/query';

import { api } from '@/service/api';

export function setUpStore() {
  const store = configureStore({
    reducer: {
      [api.reducerPath]: api.reducer,
    },
    middleware: (gDM) => gDM().concat(api.middleware),
  });
  setupListeners(store.dispatch);

  return store;
}

export const store = setUpStore();
