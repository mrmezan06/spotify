import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

/* const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': 'c9dfff0f78mshe374936907c9893p1c4f30jsn1d3620a1d634',
    'X-RapidAPI-Host': 'shazam.p.rapidapi.com',
  },
};

fetch('https://shazam.p.rapidapi.com/charts/track', options)
  .then((response) => response.json())
  .then((response) => console.log(response))
  .catch((err) => console.error(err)); */

export const shazamApi = createApi({
  reducerPath: 'shazamApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://shazam.p.rapidapi.com',
    prepareHeaders: (headers) => {
      headers.set(
        'X-RapidAPI-Key',
        'c9dfff0f78mshe374936907c9893p1c4f30jsn1d3620a1d634'
      );
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getCharts: builder.query({ query: () => '/charts/track' }),
  }),
});

export const { useGetChartsQuery } = shazamApi;
