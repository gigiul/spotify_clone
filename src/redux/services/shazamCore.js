import { createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

export const shazamCoreApi = createApi({
    reducerPath: 'shazamCoreApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://shazam-core.p.rapidapi.com/v1',
    prepareHeaders: (headers) => {
        headers.set('X-RapidAPI-Key', '4717775fc4msh966a4bdb253d820p1b5e4bjsn0a1f9a560c1d');
        return headers;
    },
}),

endpoints: (builder) => ({
    getTopCharts: builder.query({ query: () => '/charts/world'}),
    getSongDetails: builder.query({ query: ({ songid }) => `/tracks/details?track_id=${songid}` }),
    getSongRelated: builder.query({ query: ({ songid }) => `/tracks/related?track_id=${songid}` }),  
    getArtistDetails: builder.query({ query: (artistId) => `/artists/details?artist_id=${artistId}`}),
}),
});

export const {
    useGetTopChartsQuery,
    useGetSongDetailsQuery,
    useGetSongRelatedQuery,
    useGetArtistDetailsQuery,
} = shazamCoreApi;