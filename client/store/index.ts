import { AnyAction, configureStore } from '@reduxjs/toolkit';
import { createWrapper } from 'next-redux-wrapper';
import { reducer, RootState } from './reducers';
import thunk, { ThunkDispatch } from 'redux-thunk';

const initStore = () => {
  return configureStore({
    reducer: reducer,
    middleware: [thunk],
  });
};

const makeStore = () => initStore();

export const wrapper = createWrapper(makeStore);

export type NextThunkDispatch = ThunkDispatch<RootState, void, AnyAction>;
