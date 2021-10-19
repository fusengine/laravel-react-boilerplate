import React, { useEffect } from "react";
import { connect } from "react-redux";
import { BrowserRouter as Router, Route } from "react-router-dom";

import store from "./stores";
import { loadUser } from "./services";

import { Alert, Navbar } from "./components";
import { setAuthTokenHeaders } from "./config";
import Routes from "./routes";

if (localStorage.fusetoken) {
    setAuthTokenHeaders(localStorage.fusetoken);
}

const App = () => {
    useEffect(() => {
        store.dispatch(loadUser());
    }, [loadUser()]);

    return (
        <Router>
            <Navbar />
            <Alert />
            <Route component={Routes} />
        </Router>
    );
};

export default App;
