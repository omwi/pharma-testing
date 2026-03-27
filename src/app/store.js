import { configureStore } from '@reduxjs/toolkit';

import processesReducer from '@/features/processes/processes-slice';

export const store = configureStore({
  reducer: {
    processes: processesReducer,
  },
});
