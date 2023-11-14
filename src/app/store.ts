import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { photoAPI } from '../widgets/PhotoGallery/index'
import { commentsAPI } from '../entity/Comment/model/services/commentsAPI'
import { authAPI, authReducer } from '../features/Authentication'

const rootReducer = combineReducers({
    [photoAPI.reducerPath]: photoAPI.reducer,
    [commentsAPI.reducerPath]: commentsAPI.reducer,
    [authAPI.reducerPath]: authAPI.reducer,
    auth: authReducer
})

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(
        photoAPI.middleware, 
        commentsAPI.middleware,
        authAPI.middleware
    )
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch