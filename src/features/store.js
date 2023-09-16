import { configureStore } from '@reduxjs/toolkit';
import pollutionsReducer from './pollutions/pollutionsSlice';

const store = configureStore({
  reducer: {
    pollutions: pollutionsReducer,
  },
});

export default store;
