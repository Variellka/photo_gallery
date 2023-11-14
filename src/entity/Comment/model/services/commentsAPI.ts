import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Comment } from '../types/comment'

export const commentsAPI = createApi({
    reducerPath: 'commentsAPI',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:8000/'
    }),
    endpoints: (build) => ({
        fetchCommentsById: build.query<Comment[], string>({
            query: (id) => ({
                url: '/comments',
                params: {
                    photoId: id,
                    _expand: 'user',
                },
            })
        })
    })
})