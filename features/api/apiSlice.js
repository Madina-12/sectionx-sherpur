import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const apiSlice = createApi({
    reducerPath: 'api', // optional
    baseQuery: fetchBaseQuery({ baseUrl: 'https://sectionx-sherpur.vercel.app/' }),
    tagTypes: ['Post', 'Section'],
    endpoints: builder => ({})
})