import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { User } from '../../../../entity/User'
import type { RootState } from '../../../../app/store'

type AuthState = {
  user: User | null
  token: string | null
}

const authSlice = createSlice({
    name: 'authSlice',
    initialState: { user: null, token: null } as AuthState,
    reducers: {
        setCredentials: (
            state,
            { payload: { user, token } }: PayloadAction<{ user: User; token: string }>
        ) => {
            state.user = user
            state.token = token
        },
    },
})

export const { actions: authActions } = authSlice;
export const { reducer: authReducer } = authSlice;

export const selectCurrentUser = (state: RootState) => state.auth.user
