import React, { useEffect } from "react";
import { connect, useDispatch } from "react-redux";
import { BrowserRouter as Router, Route } from "react-router-dom";

import AppRoutes from "./routes/AppRoutes";
import { Alert, Navbar } from "./components";

import {
    loadUser,
    authenticatedSelector,
    getSessionStorage,
    setAuthTokenHeaders,
} from "./services";

const App = ({ dispatchUserLoading }) => {
    const dispatch = useDispatch();

    useEffect(() => {
        if (getSessionStorage()) {
            setAuthTokenHeaders(getSessionStorage());
            dispatch(dispatchUserLoading);
        }
    }, [dispatch]);

    return (
        <Router>
            <Navbar />
            <Alert />
            <AppRoutes />
        </Router>
    );
};

const mapStateToProps = (state) => {
    return {
        isAuthenticated: authenticatedSelector(state),
    };
};

const mapDispatchToProps = (dispatch) => {
    return { dispatchUserLoading: () => dispatch(loadUser()) };
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
