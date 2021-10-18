import { TOKEN_NAME } from "./defaults/constantes.config";

/**
 * Permet d'insérer le token
 *
 * @param Any value la valeur du token
 */
export const setLocalStorageToken = (value) => {
    return localStorage.setItem(TOKEN_NAME, value);
};

/**
 * Permet d'accédé a la valeur du token ou le retire du header
 *
 * @param Any value
 */
export const setAuthTokenHeaders = (value) => {
    if (token) {
        axios.defaults.headers.common[TOKEN_NAME] = value; // set token
    } else {
        delete axios.defaults.headers.common[TOKEN_NAME]; // remove token
    }
};

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
