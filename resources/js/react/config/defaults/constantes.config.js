export const API_CONNECTION = "/api";

export const TOKEN_NAME = "fusetoken";
export const LOCAL_TOKEN_ACCESS = localStorage.fuse_token;
export const GET_LOCAL_TOKEN = localStorage.getItem(TOKEN_NAME);
export const REMOVE_LOCAL_TOKEN = localStorage.removeItem(TOKEN_NAME);
