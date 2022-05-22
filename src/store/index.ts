import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';

import { api } from '@/service/api';
import { messageAlertSlice } from '@/features/messageAlert/messageAlertSlice';

export function setUpStore() {
  const store = configureStore({
    reducer: {
      messageAlert: messageAlertSlice.reducer,
      [api.reducerPath]: api.reducer,
    },
    middleware: (gDM) => gDM().concat(api.middleware),
  });
  setupListeners(store.dispatch);

  return store;
}

export const store = setUpStore();

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
