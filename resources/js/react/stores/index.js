import { createStore, applyMiddleware, combineReducers } from "redux";
import logger from "redux-logger";
import thunkMiddleware from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension/developmentOnly";

import reducers from "../services/redux/reducers";

const combineReducersApp = combineReducers(reducers);
const middlewares = [thunkMiddleware];

/**
 * crée un middleware permettant la sauvegarde du
 */

if (process.env.NODE_ENV === "development") {
    // Push le logger si on est en dev
    middlewares.push(logger);
}

const store = createStore(
    combineReducersApp,
    composeWithDevTools(applyMiddleware(...middlewares))
);

export default store;
