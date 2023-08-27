import {
  createEntityAdapter,
  createSlice,
  PayloadAction,
} from '@reduxjs/toolkit';
import { NotificationType } from '@shared-helpers';
import { ToastProps } from '@shared-ui';

export const SNACKBAR_FEATURE_KEY = 'snackbar';

export interface SnackbarState {
  snackbarType: NotificationType;
  isOpen: boolean;
  title: string;
  message: string;
}

export const snackbarAdapter = createEntityAdapter<SnackbarState>();

export const initialSnackbarState: SnackbarState = {
  snackbarType: NotificationType.error,
  isOpen: false,
  title: 'Default Title',
  message: 'Default Message',
};

export const snackbarSlice = createSlice({
  name: SNACKBAR_FEATURE_KEY,
  initialState: initialSnackbarState,
  reducers: {
    setSnackBar: (state, action: PayloadAction<ToastProps>) => ({
      ...state,
      ...action.payload,
      isOpen: true,
    }),
    closeSnackBar: (state) => ({
      ...state,
      isOpen: false,
    }),
  },
});

export const snackbarReducer = snackbarSlice.reducer;

export const { setSnackBar, closeSnackBar } = snackbarSlice.actions;

export const getSnackbarState = (rootState: any): SnackbarState =>
  rootState[SNACKBAR_FEATURE_KEY];
