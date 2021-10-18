import { REGISTER_USER_SUCCESS, REGISTER_USER_FAILED } from "../../services";

import {
    setLocalStorageToken,
    GET_LOCAL_TOKEN,
    REMOVE_LOCAL_TOKEN,
} from "../../config";

const stateInitiale = {
    user: null,
    error: null,
    loading: false,
    isAuthenticated: false,
    token: GET_LOCAL_TOKEN,
};

export default (state = stateInitiale, action) => {
    const { type, payload } = action;

    switch (type) {
        case REGISTER_USER_SUCCESS: {
            return {
                ...state,
                ...payload,
                user: null,
                error: null,
                token: null,
                loading: false,
                isAuthenticated: false,
            };
        }
        case REGISTER_USER_FAILED: {
            REMOVE_LOCAL_TOKEN;
            return {
                ...state,
                user: null,
                token: null,
                error: payload,
                loading: false,
                isAuthenticated: false,
            };
        }

        default:
            return state;
    }
};
