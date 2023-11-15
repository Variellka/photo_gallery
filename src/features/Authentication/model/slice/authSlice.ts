import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { User } from '../../../../entity/User'
import type { RootState } from '../../../../app/store'


interface AuthState {
    auth_data: {
        user?: User
        token?: string | null
    }
    _inited: boolean
}

const AUTH_DATA = 'auth_data'

const authSlice = createSlice({
    name: 'authSlice',
    initialState: { auth_data: {}, _inited: false } as AuthState,
    reducers: {
        setCredentials: (
            state,
            { payload: { user, token } }: PayloadAction<{ user: User; token: string }>
        ) => {
            state.auth_data.user = user
            state.auth_data.token = token
            localStorage.setItem(AUTH_DATA, JSON.stringify({user, token}))
        },
        initAuthData: (state) => {
            const auth_data = localStorage.getItem(AUTH_DATA)
            if (auth_data) {
                state.auth_data = JSON.parse(auth_data);
                
            }
            state._inited = true
        },
        deleteAuthData: (state) => {
            state.auth_data = {};
            localStorage.removeItem(AUTH_DATA);
        }
    },
})

export const { actions: authActions } = authSlice;
export const { reducer: authReducer } = authSlice;

export const selectCurrentUser = (state: RootState) => state.auth.auth_data?.user
export const selectAuthDataInited = (state: RootState) => state.auth._inited
