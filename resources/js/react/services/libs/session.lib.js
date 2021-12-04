import { SESSION_STORAGE_NAME } from "./constantes.lib";

/**
 * Insère un stockage du token en session
 * @param String value
 */
export const setSessionStorage = (value, name = SESSION_STORAGE_NAME) => {
    return sessionStorage.setItem(name, value);
};

/**
 * Affiche Le token stocké en sessionStorage
 * @return String
 */
export const getSessionStorage = () =>
    sessionStorage.getItem(SESSION_STORAGE_NAME);

/**
 * Supprime Le token stocké en sessionStorage
 * @return String
 */
export const removeSessionStorage = () =>
    sessionStorage.removeItem(SESSION_STORAGE_NAME);
