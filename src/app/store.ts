import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { photoAPI } from '../entity/Photo'

const rootReducer = combineReducers({
    [photoAPI.reducerPath]: photoAPI.reducer
})

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(photoAPI.middleware)
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch