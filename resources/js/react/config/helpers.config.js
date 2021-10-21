import { TOKEN_NAME } from "./constantes.config";
import { createBrowserHistory } from "history";

/**
 * Permet d'accédé a la valeur du token ou le retire du header
 *
 * @param Any value
 */
export const setAuthTokenHeaders = (token) => {
    if (token) {
        axios.defaults.headers.common[TOKEN_NAME] = token; // set token
    } else {
        delete axios.defaults.headers.common[TOKEN_NAME]; // remove token
    }
};

/**
 * Permet de forcé le rafraîchissement
 */
export const history = createBrowserHistory({
    forceRefresh: true,
});

/**
 * Change la couleur de la classe si il y'a une erreur
 * @param {*} name
 * @returns
 */
export const errorClassField = (name) => {
    if (name) {
        return "form-control is-invalid";
    }
    return "form-control";
};

/**
 * Affiche le text en rouge en cas d'erreur
 * @param {*} name
 * @returns
 */
export const errorFieldMessage = (name) => {
    if (name) {
        return <div className="text-danger">{name ? name : ""}</div>;
    }
    return "";
};
