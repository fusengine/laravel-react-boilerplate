import {
    clearAllCookie,
    getSessionStorage,
    removeSessionStorage,
    setSessionStorage,
} from "../../config";

import {
    REGISTER_USER_SUCCESS,
    REGISTER_USER_FAILED,
    LOGIN_USER_FAILED,
    LOGIN_USER_SUCCESS,
    USER_LOADED_ERROR,
    USER_LOADED,
    LOGOUT_USER,
    USER_PROFILE_CLEAR,
} from "../../services/redux";

const initialState = {
    user: {},
    error: null,
    loading: false,
    isAuthenticated: false,
    token: getSessionStorage(),
};

export default (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case USER_LOADED: {
            return {
                ...state,
                user: payload,
                loading: true,
                isAuthenticated: true,
            };
        }
        case REGISTER_USER_SUCCESS: {
            return {
                ...state,
                user: {},
                error: null,
                token: null,
                loading: true,
                isAuthenticated: false,
            };
        }
        case LOGIN_USER_SUCCESS: {
            setSessionStorage(payload.token_access);
            return {
                ...state,
                error: null,
                loading: true,
                token: payload.token_access,
                isAuthenticated: true,
            };
        }
        case LOGOUT_USER:
        case USER_LOADED_ERROR:
        case LOGIN_USER_FAILED:
        case USER_PROFILE_CLEAR:
        case REGISTER_USER_FAILED: {
            removeSessionStorage();
            clearAllCookie();
            return {
                ...state,
                user: {},
                loading: false,
                error: payload,
                token: null,
                isAuthenticated: false,
            };
        }

        default:
            return state;
    }
};
