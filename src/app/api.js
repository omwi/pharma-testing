import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { loggedOut, tokenReceived } from '@/features/auth/auth-slice.js';

const TOKEN_EXPIRE_MINS = 15;

const baseQuery = fetchBaseQuery({
  baseUrl: 'https://dummyjson.com/',
  prepareHeaders: (headers, { getState }) => {
    const token = getState().auth.accessToken;
    if (token) {
      headers.set('Authorization', `Bearer ${token}`);
    }
    return headers;
  },
});

const baseQueryWithReauth = async (args, api, extraOptions) => {
  let result = await baseQuery(args, api, extraOptions);
  if (result.error && result.error.status === 401) {
    const refreshToken = api.getState().auth.refreshToken;
    if (!refreshToken) {
      api.dispatch(loggedOut());
      return result;
    }

    const refreshResult = await baseQuery(
      {
        url: 'auth/refresh',
        method: 'POST',
        body: {
          refreshToken: refreshToken,
          expiresInMins: TOKEN_EXPIRE_MINS,
        },
      },
      api,
      extraOptions,
    );
    if (refreshResult.data) {
      api.dispatch(tokenReceived(refreshResult.data));
      result = await baseQuery(args, api, extraOptions);
    } else {
      api.dispatch(loggedOut());
    }
  }
  return result;
};

export const api = createApi({
  baseQuery: baseQueryWithReauth,
  endpoints: (builder) => ({
    login: builder.mutation({
      query: ({ username, password }) => ({
        url: 'auth/login',
        method: 'POST',
        body: {
          username,
          password,
          expiresInMins: TOKEN_EXPIRE_MINS,
        },
      }),
      invalidatesTags: ['User'],
    }),

    getMe: builder.query({
      query: () => ({ url: 'auth/me' }),
      providesTags: ['User'],
    }),
  }),
});

export const { useLoginMutation, useGetMeQuery } = api;
