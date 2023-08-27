import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';

import {
  SNACKBAR_FEATURE_KEY,
  snackbarReducer,
} from './slice/toast/toast.slice';

//Redux store setup
export const store = configureStore({
  reducer: {
    [SNACKBAR_FEATURE_KEY]: snackbarReducer,
  },
  middleware: [...getDefaultMiddleware()],
  devTools: process.env.NODE_ENV !== 'production',
  enhancers: [],
});

export type RootState = ReturnType<typeof store.getState>;
