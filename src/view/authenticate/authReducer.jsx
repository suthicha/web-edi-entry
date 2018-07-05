import { createReducer } from '../../common/utils/reducerUtil';
import { 
    AUTH_LOGIN_USER, 
    AUTH_SIGN_OUT_USER 
} from './authConstants';

const initialState = {
    userInfo: {},
    authenticated: false,
};

export const loginUser = (state, payload) => {
    return {
        ...state,
        authenticated: true,
        userInfo: payload.auth.email
    }
};

export const signOutUser = (state) => {
    return {
        ...state,
        authenticated: false,
        userInfo: {}
    }
};

export default createReducer(initialState,{
    [AUTH_LOGIN_USER]: loginUser,
    [AUTH_SIGN_OUT_USER]: signOutUser
});
