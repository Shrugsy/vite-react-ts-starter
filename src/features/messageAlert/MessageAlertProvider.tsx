/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import { Button } from '@mui/material';
import { SnackbarKey, SnackbarProvider, useSnackbar } from 'notistack';
import React, { ReactNode, useEffect, useRef } from 'react';

import { useAppDispatch, useAppSelector } from '@/store/hooks';

import { errorMessageCleared, selectErrorMessage } from './messageAlertSlice';

const MessageAlerter = () => {
  const { enqueueSnackbar } = useSnackbar();
  const dispatch = useAppDispatch();
  const errorMessage = useAppSelector(selectErrorMessage);

  useEffect(() => {
    if (!errorMessage) return;
    enqueueSnackbar(errorMessage, { variant: 'error' });
    dispatch(errorMessageCleared());
  }, [errorMessage, enqueueSnackbar, dispatch]);

  return null;
};

type MessageAlertProviderProps = {
  children: ReactNode;
};

/**
 * Wrapper around `SnackbarProvider` from notistack, with a global 'dismiss' action
 * attached to each snackbar.
 */
function MessageAlertProvider({ children }: MessageAlertProviderProps) {
  const notistackRef = useRef<SnackbarProvider>(null);
  function handleDismiss(key: SnackbarKey) {
    notistackRef.current?.closeSnackbar(key);
  }

  return (
    <SnackbarProvider
      ref={notistackRef}
      preventDuplicate
      action={(key) => (
        <Button
          css={css`
            color: white;
          `}
          onClick={() => handleDismiss(key)}
        >
          Dismiss
        </Button>
      )}
    >
      <>
        <MessageAlerter />
        {children}
      </>
    </SnackbarProvider>
  );
}

export default MessageAlertProvider;
