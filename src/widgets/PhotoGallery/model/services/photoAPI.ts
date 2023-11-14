import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Photo } from '../types/PhotoSchema'
import { Comment } from '../../../../entity/Comment'


export const photoAPI = createApi({
    reducerPath: 'photoAPI',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:8000/'
    }),
    endpoints: (build) => ({
        fetchAllPhotos: build.query<Photo[], ''>({
            query: () => ({
                url: '/photos'
            })
        })
    })
})