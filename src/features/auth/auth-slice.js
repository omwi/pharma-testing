import { createSlice } from '@reduxjs/toolkit';

import { api } from '@/app/api.js';

const initialState = {
  user: null,
  accessToken: null,
  refreshToken: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    tokenReceived(state, action) {
      const { accessToken, refreshToken } = action.payload;
      state.accessToken = accessToken;
      state.refreshToken = refreshToken;
    },
    loggedOut(state) {
      state.user = null;
      state.accessToken = null;
      state.refreshToken = null;
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      api.endpoints.login.matchFulfilled,
      (state, { payload }) => {
        const { accessToken, refreshToken, ...user } = payload;
        state.user = user;
        state.accessToken = accessToken;
        state.refreshToken = refreshToken;
      },
    );
  },
});

export default authSlice.reducer;

export const { tokenReceived, loggedOut } = authSlice.actions;

export const selectCurrentUser = (state) => state.auth.user;
