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

export const clearAllCookie = () => {
    var cookies = document.cookie.split(";");

    for (var i = 0; i < cookies.length; i++) {
        var cookie = cookies[i];
        var eqPos = cookie.indexOf("=");
        var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
        document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
    }
};

/**
 * Permet d'extraire un object d'un tableau
 *
 * @param Array data donnée du tableau []
 * @param Integer Key la clef du tableau contenant la donnée.
 * @returns Object
 */
export const fuseExtractArrayToJson = (data, key = 0) => {
    return data && data.length ? data[key] : "Cette donnée est vide.";
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
 * Permet de simuler un chargement
 * @param Int duration duré de chargement 1000 => 1 sec
 * @returns
 */
export const wait = (duration = 1000) => {
    return new Promise((resolve) => {
        return window.setTimeout(resolve, duration);
    });
};

export default function isEmpty(obj) {
    return Object.getOwnPropertyNames(obj).length === 0;
}
