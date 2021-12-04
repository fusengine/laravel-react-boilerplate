import { v4 as uuidv4 } from "uuid";

import { SET_ALERT, REMOVE_ALERT } from "../types.redux";

/** envoie l'ensemble des alertes a dispatché */
export const setAlert =
    (msg, alertType, timeout = 6000) =>
    (dispatch) => {
        const id = uuidv4(); // génère des chiffre et lettre aléatoire
        dispatch({
            type: SET_ALERT,
            payload: { msg, alertType, id },
        });

        // enleve l'alerte au bout de 5 sec
        setTimeout(
            () => dispatch({ type: REMOVE_ALERT, payload: id }),
            timeout
        );
    };
