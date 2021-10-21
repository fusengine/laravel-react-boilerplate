import React, { useEffect } from "react";
import { connect, useDispatch } from "react-redux";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Routes from "./routes";
import { Alert, Navbar } from "./components";

import { loadUser, authenticatedSelector } from "./services";
import { getSessionStorage, setAuthTokenHeaders } from "./config";

const App = ({ isAuthenticated }) => {
    const dispatch = useDispatch();

    useEffect(() => {
        if (getSessionStorage()) {
            setAuthTokenHeaders(getSessionStorage());
            dispatch(loadUser());
        }
    }, [dispatch]);

    return (
        <Router>
            <Navbar />
            <Alert />
            <Route component={Routes} />
        </Router>
    );
};

const mapStateToProps = (state) => {
    return {
        isAuthenticated: authenticatedSelector(state),
    };
};
export default connect(mapStateToProps)(App);
