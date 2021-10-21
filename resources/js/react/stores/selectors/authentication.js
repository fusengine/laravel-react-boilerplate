import { createSelector } from "reselect";

// Récupèrer l'état des utilisateur selectioné
const userSelector = (state) => state.authentication;

/**
 * Permet de savoir si l'utilisateur est authentifié
 * @param any state l'état
 * @returns
 */
export const authenticatedSelector = (state) =>
    state.authentication.isAuthenticated;

/**
 * Permet de savoir si l'état loading est chargé
 * @param any state
 * @returns
 */
export const loadingSelector = (state) => state.authentication.loading;

/**
 * Permet de savoir si l'état utilisateur est chargé
 * @param any state
 * @returns
 */
export const loadingUserSelector = createSelector(
    userSelector,
    (state) => state.user
);
