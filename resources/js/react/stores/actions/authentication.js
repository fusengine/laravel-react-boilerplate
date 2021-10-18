import { POST_API } from "../../config";

/**
 * Types
 */
import {
    USER_LOADED,
    REGISTER_USER_SUCCESS,
    REGISTER_USER_FAILED,
} from "../../services";

/**
 * Service
 */
import { setAlert } from "../../services";

/**
 * Permet de charger les données une fois connecté
 */
export const loadUser = () => async (dispatch) => {
    try {
    } catch (err) {}
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
export const login = () => async (dispatch) => {
    try {
    } catch (err) {}
};

/**
 * Permet la déconnexion
 */
export const logout = () => async (dispatch) => {
    try {
    } catch (err) {}
};
