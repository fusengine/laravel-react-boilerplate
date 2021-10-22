import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import store from "./stores";
import App from "./App";

const rendDom = document.getElementById("fusengine");

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>,

    rendDom
);
