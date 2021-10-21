import { API_CONNECTION } from "./constantes.config";
import { getSessionStorage } from "./sessionStorage.config";

/** Options d'axios */
const options = {
    headers: {
        Accept: "application/json",
        Authorization: "Bearer " + getSessionStorage(),
        "Content-Type": "application/json",
        "X-CSRF-TOKEN": document.getElementsByName("csrf-token")[0].content,
        //"X-XSRF-TOKEN": (document.cookie = "XSRF-TOKEN"),
    },
};

/** Connection a l'api de base  */
const API = axios.create({
    //xsrfHeaderName: "X-XSRF-TOKEN",
    baseURL: API_CONNECTION,
    withCredentials: true,
});

API.interceptors.request.use((req) => {
    req.headers["Authorization"] = `Bearer ${getSessionStorage()}`;
    return req;
});

export const POST_API = (url, data) => API.post(url, data, options);
export const GET_API = (url, data) => API.get(url, data, options);
