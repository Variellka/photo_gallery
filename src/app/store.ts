import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { photoAPI } from '../widgets/PhotoGallery/index'
import { commentsAPI } from '../entity/Comment/model/services/commentsAPI'

const rootReducer = combineReducers({
    [photoAPI.reducerPath]: photoAPI.reducer,
    [commentsAPI.reducerPath] : commentsAPI.reducer
})

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(photoAPI.middleware, commentsAPI.middleware)
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch