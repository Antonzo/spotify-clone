import { configureStore } from '@reduxjs/toolkit';
import { createWrapper } from 'next-redux-wrapper';
import { reducer } from './reducers';

// Initialize the Redux store
const initStore = () => {
  return configureStore({
    reducer: reducer,
  });
};

const makeStore = () => initStore();

export const wrapper = createWrapper(makeStore);
