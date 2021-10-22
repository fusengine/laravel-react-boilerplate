import { createSelector } from "reselect";

// Récupère l'état des utilisateur sélectionné
const userSelector = (state) => state.authentication;

/**
 * Permet de savoir si l'utilisateur est authentifié
 * @param any auth l'état
 * @returns
 */
export const authenticatedSelector = createSelector(
    [userSelector],
    (auth) => auth.isAuthenticated
);

/**
 * Permet de savoir si l'état loading est chargé
 * @param any auth
 * @returns
 */
export const loadingSelector = createSelector(
    [userSelector],
    (auth) => auth.loading
);

/**
 * Permet de savoir si l'état des erreurs
 * @param any auth
 * @returns
 */
export const errorSelector = createSelector(
    [userSelector],
    (auth) => auth.error
);

/**
 * Permet de savoir si l'état utilisateur est chargé
 * @param any state
 * @returns
 */
export const loadingUserSelector = createSelector(
    userSelector,
    (state) => state.user
);
