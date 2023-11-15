import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Photo } from '../types/PhotoSchema'
import { RootState } from '../../../../app/store'

export const photoAPI = createApi({
    reducerPath: 'photoAPI',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:8000/',
        prepareHeaders: (headers, { getState }) => {
            const token = (getState() as RootState).auth.auth_data.token
            if (token) {
                headers.set('authorization', `Bearer ${token}`)
            }
            return headers
        },
    }),
    endpoints: (build) => ({
        fetchAllPhotos: build.query<Photo[], ''>({
            query: () => ({
                url: '/photos'
            })
        })
    })
})