import {
    REGISTER_USER_SUCCESS,
    REGISTER_USER_FAILED,
    LOGIN_USER_FAILED,
    LOGIN_USER_SUCCESS,
    USER_LOADED_ERROR,
    USER_LOADED,
} from "../../services";

import { TOKEN_NAME, REMOVE_LOCAL_TOKEN } from "../../config";

const stateInitiale = {
    user: null,
    error: null,
    loading: false,
    isAuthenticated: false,
    token_access: localStorage.getItem(TOKEN_NAME),
};

export default (state = stateInitiale, action) => {
    const { type, payload } = action;

    switch (type) {
        case USER_LOADED: {
            //localStorage.setItem(TOKEN_NAME, payload.token_access);
            return {
                ...state,
                ...payload,
                user: payload,
                loading: true,
                token_access: payload.token_access,
                isAuthenticated: true,
            };
        }
        case REGISTER_USER_SUCCESS: {
            return {
                ...state,
                ...payload,
                user: null,
                error: null,
                token_access: null,
                loading: false,
                isAuthenticated: false,
            };
        }
        case LOGIN_USER_SUCCESS: {
            localStorage.setItem(
                TOKEN_NAME,
                JSON.stringify(payload.token_access)
            );
            return {
                ...state,
                ...payload,
                error: null,
                loading: true,
                token_access: payload.token_access,
                isAuthenticated: true,
            };
        }
        case USER_LOADED_ERROR:
        case LOGIN_USER_FAILED:
        case REGISTER_USER_FAILED: {
            REMOVE_LOCAL_TOKEN;
            return {
                ...state,
                user: null,
                loading: false,
                error: payload,
                token_access: null,
                isAuthenticated: false,
            };
        }

        default:
            return state;
    }
};
