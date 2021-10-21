import { SET_ALERT, REMOVE_ALERT } from "../../services/redux";

/** déclaration de l'état initial avec un tableau vide */
const initialState = [];

export default (state = initialState, action) => {
    // Destructuration
    const { type, payload } = action;

    switch (type) {
        case SET_ALERT:
            // Renvoie l'alerte avec le payload
            return [...state, payload];

        case REMOVE_ALERT:
            // Supprime l'état filtrée excepté si l'id de l'alert est différent du payload
            return state.filter((alert) => alert.id !== payload);

        default:
            return state;
    }
};
