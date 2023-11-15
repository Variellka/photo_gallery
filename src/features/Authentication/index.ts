import Authentification from './ui/Authentication';
import { authReducer, selectCurrentUser, authActions, selectAuthDataInited } from './model/slice/authSlice';
import { authAPI } from './model/services/authAPI';

export {Authentification, authReducer, authAPI, selectCurrentUser, authActions, selectAuthDataInited}