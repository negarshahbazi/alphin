// src/app/store.js

import { configureStore } from '@reduxjs/toolkit';
import puresReducer from '../features/puresSlice';
import legendReducer from '../features/legendSlice';

export  const store = configureStore({
  reducer: {
    pures: puresReducer,
    legend: legendReducer,
  },
});
