import { API_CONNECTION } from "./defaults/constantes.config";

/** Options d'axios */
const options = {
    headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        //"X-CSRF-TOKEN": document.getElementsByName("csrf-token")[0].content,
        //Authorization: "Bearer " + GET_LOCAL_TOKEN,
    },
};

/** Connection a l'api de base  */
const API = axios.create({
    //xsrfHeaderName: "X-XSRF-TOKEN",
    baseURL: API_CONNECTION,
    withCredentials: true,
});

// API.interceptors.request.use((req) => {
//     req.headers["Authorization"] = `Bearer ${GET_LOCAL_TOKEN}`;
//     return req;
// });

export const POST_API = (url, data) => API.post(url, data, options);
export const GET_API = (url, data) => API.get(url, data, options);
