import { configureStore } from '@reduxjs/toolkit';
import { createWrapper } from 'next-redux-wrapper';
import { reducer } from './reducers';
import thunk from 'redux-thunk';

const initStore = () => {
  return configureStore({
    reducer: reducer,
    middleware: [thunk],
  });
};

const makeStore = () => initStore();

export const wrapper = createWrapper(makeStore);
