import { API_CONNECTION } from "./constantes.lib";
import { getSessionStorage } from "./session.lib";

/** Options d'axios */
const options = {
    headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: "Bearer " + getSessionStorage(),
        "X-CSRF-TOKEN": document.getElementsByName("csrf-token")[0].content,
    },
};

/** Connection a l'api de base  */
const API = axios.create({
    //xsrfHeaderName: "X-XSRF-TOKEN",
    baseURL: API_CONNECTION,
    withCredentials: true,
});

/**
 * Permet l'integration de l'authorisation Bearer
 * sur tous les urls
 */
API.interceptors.request.use((req) => {
    req.headers["Authorization"] = `Bearer ${getSessionStorage()}`;
    return req;
});

/**
 * Permet de poster les données en database
 * @param String url de l'api
 * @param Object data à enregistré dans database
 * @returns
 */
export const POST_API = (url, data) => API.post(url, data, options);

/**
 * Permet de lire toutes les données en database
 * @param String url de l'api
 * @param Object data à enregistré dans database
 * @returns
 */
export const GET_API = (url, data) => API.get(url, data, options);

/**
 * Permet de mettre à jour une données en database
 * @param String url de l'api
 * @param Object data à mettre à jour dans database
 * @returns
 */
export const PUT_API = (url, data) => API.put(url, data, options);

/**
 * Permet de supprimé une données en database
 * @param String url de l'api
 * @param Object data à mettre à jour dans database
 * @returns
 */
export const PATCH_DELETE = (url, data) => API.delete(url, data, options);
