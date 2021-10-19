import {
    GET_API,
    POST_API,
    setAuthTokenHeaders,
    TOKEN_NAME,
} from "../../config";

/**
 * Types
 */
import {
    USER_LOADED,
    REGISTER_USER_SUCCESS,
    REGISTER_USER_FAILED,
    LOGIN_USER_SUCCESS,
    LOGIN_USER_FAILED,
    USER_LOADED_ERROR,
} from "../../services";

/**
 * Service
 */
import { setAlert } from "../../services";

/**
 * Permet de charger les données une fois connecté
 */
export const loadUser = () => async (dispatch) => {
    // vérifie le token stocké dans le navigateur
    if (localStorage.fusetoken) {
        setAuthTokenHeaders(localStorage.fusetoken);
    }

    try {
        //récupère l'api
        const response = await GET_API("user");

        // Envoie le reducer et la donnée une fois connecté
        dispatch({
            type: USER_LOADED,
            payload: response.data,
        });
        dispatch(setAlert("Vos données sont chargé.", "success"));
    } catch (err) {
        dispatch({
            type: USER_LOADED_ERROR,
            payload: err.response.data.message,
        });
    }
};

/**
 * Permet de créer un compte
 */
export const register = (body) => async (dispatch) => {
    try {
        const res = await POST_API("/register", body);

        dispatch({
            type: REGISTER_USER_SUCCESS,
            payload: res.data,
        });
        dispatch(setAlert("Compte crée avec success", "primary"));
    } catch (err) {
        switch (err.response.status) {
            case 422:
                dispatch(
                    setAlert(
                        "Une erreur c'est produite veuillez vérifié les champs.",
                        "warning"
                    )
                );
                break;
            case 500:
                dispatch(
                    setAlert(
                        "Problème de connexion à la base de données",
                        "danger"
                    )
                );
                break;
            default:
                return err.response.status;
        }

        dispatch({
            type: REGISTER_USER_FAILED,
            payload: err.response.data.errors,
        });
    }
};

/**
 * Permet de ce connecté
 */
export const login = (body) => async (dispatch) => {
    try {
        await GET_API("/sanctum/csrf-cookie");
        const res = await POST_API("/login", body);

        dispatch({
            type: LOGIN_USER_SUCCESS,
            payload: res.data,
        });

        dispatch(setAlert("Vous êtes connecté.", "primary"));
        dispatch(loadUser());
    } catch (err) {
        switch (err.response.status) {
            case 422:
                dispatch(
                    setAlert(
                        "Erreur de connexion au compte, veuillez réessayé.",
                        "warning"
                    )
                );
                break;
            case 500:
                dispatch(
                    setAlert(
                        "Problème de connexion à la base de données",
                        "danger"
                    )
                );
                break;
            default:
                return err.response.status;
        }

        dispatch({
            type: LOGIN_USER_FAILED,
            payload: err.response.data.errors,
        });
    }
};

/**
 * Permet la déconnexion
 */
export const logout = () => async (dispatch) => {
    try {
    } catch (err) {}
};