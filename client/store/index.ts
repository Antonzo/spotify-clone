import { configureStore } from '@reduxjs/toolkit';
import { createWrapper } from 'next-redux-wrapper';
import { reducer } from './reducers';
import thunk, { ThunkDispatch } from 'redux-thunk';
import { RootState } from './reducers';
import { AnyAction } from 'redux';

const initStore = () => {
  return configureStore({
    reducer: reducer,
    middleware: [thunk],
  });
};

const makeStore = () => initStore();

export const wrapper = createWrapper(makeStore);

export type NextThunkDispatch = ThunkDispatch<RootState, void, AnyAction>;
