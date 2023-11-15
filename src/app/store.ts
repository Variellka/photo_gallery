import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { editCommentsAPI, photoAPI } from '../widgets/PhotoGallery/index'
import { authAPI, authReducer } from '../features/Authentication'

const rootReducer = combineReducers({
    [photoAPI.reducerPath]: photoAPI.reducer,
    [editCommentsAPI.reducerPath]: editCommentsAPI.reducer,
    [authAPI.reducerPath]: authAPI.reducer,
    auth: authReducer
})

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(
        photoAPI.middleware, 
        authAPI.middleware,
        editCommentsAPI.middleware
    )
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch