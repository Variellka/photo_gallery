import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Comment } from '../../../../entity/Comment/model/types/comment'
import { RootState } from '../../../../app/store'

export const editCommentsAPI = createApi({
    reducerPath: 'editCommentsAPI',
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
    tagTypes: ['Comments'],
    endpoints: (build) => ({
        fetchCommentsById: build.query<Comment[], string>({
            query: (id) => ({
                url: '/comments',
                params: {
                    photoId: id,
                    _expand: 'user',
                },
            }),
            providesTags: result => ['Comments']
        }),
        addComment: build.mutation<Comment, Comment>({
            query: (comment) => ({
                url: '/comments',
                method: 'POST',
                body: {
                    text: comment.text,
                    userId: comment.user.id,
                    photoId: comment.photoId
                }
            }),
            invalidatesTags: ['Comments']
        }),
        deleteComment: build.mutation<string, string>({
            query: (id) => ({
                url: `/comments/${id}`,
                method: 'DELETE'
            }),
            invalidatesTags: ['Comments']
        }),
    })
})