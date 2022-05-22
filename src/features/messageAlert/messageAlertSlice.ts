import { AnyAction, createSlice } from '@reduxjs/toolkit';

import { RootState } from '@/store';

const isRejectedFromRtkqAction = (action: AnyAction) => {
  return (
    action.type.endsWith('/executeQuery/rejected') ||
    action.type.endsWith('/executeMutation/rejected')
  );
};

const defaultErrorMessage = 'An unknown error has occurred.';

export const messageAlertSlice = createSlice({
  name: 'messageAlert',
  initialState: {
    errorMessage: '',
  },
  reducers: {
    errorMessageCleared(draft) {
      draft.errorMessage = '';
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(isRejectedFromRtkqAction, (draft, { payload, error }) => {
      // condition errors are expected errors received when de-duping rtk-query requests
      // abort errors are intentional cancellations
      if (error.name === 'ConditionError' || error.name === 'AbortError') {
        return;
      }
      console.error('A network request has been rejected: ', { payload, error });
      let finalMessage = payload?.data?.detail || error.message || defaultErrorMessage;
      if (finalMessage === 'Rejected') {
        finalMessage = 'A network request has been rejected.';
      }
      draft.errorMessage = finalMessage;
    });
  },
});

export const { errorMessageCleared } = messageAlertSlice.actions;

export const selectErrorMessage = (state: RootState): string => state.messageAlert.errorMessage;
