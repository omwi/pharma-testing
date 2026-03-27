import { createSlice } from '@reduxjs/toolkit';

export const processesSlice = createSlice({
  name: 'processes',
  initialState: [],
  reducers: {
    addProcess: (state, action) => {
      state.push(action.payload);
    },
  },
  selectors: {
    selectProcesses: (state) => state,
  },
});

export default processesSlice.reducer;
export const { addProcess } = processesSlice.actions;
export const { selectProcesses } = processesSlice.selectors;
