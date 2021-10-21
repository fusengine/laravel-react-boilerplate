import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { authenticatedSelector, loadingUserSelector } from "../services/redux";

import { getSessionStorage } from "../config";

/** Permet de dire si on est authentifié */
const AuthRoute = ({
    component: Component,
    isAuthenticated,
    loading,
    ...rest
}) => {
    const verifyAuth = !isAuthenticated && loading;
    const storage = getSessionStorage();
    return (
        <Route
            {...rest}
            render={(props) =>
                !storage && verifyAuth ? (
                    <Redirect
                        to={{
                            pathname: "/login",
                            state: { from: props.location },
                        }}
                    />
                ) : (
                    <Component {...props} />
                )
            }
        />
    );
};

/** Extrait l'état au propriété */
const mapStateToProps = (state) => ({
    isAuthenticated: authenticatedSelector(state),
    loading: loadingUserSelector(state),
});

export default connect(mapStateToProps)(AuthRoute);
