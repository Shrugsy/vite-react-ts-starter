import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const api = createApi({
  reducerPath: 'service',
  baseQuery: fetchBaseQuery({
    baseUrl: '/api/',
  }),
  endpoints: (build) => ({
    getProjects: build.query<null, void>({
      query: () => `projects`,
    }),
  }),
});

export const { useGetProjectsQuery } = api;
