import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";

/** Permet de dire si on est authentifié */
const AuthRoute = ({
    component: Component,
    isAuthenticated,
    loading,
    ...rest
}) => {
    return (
        <Route
            {...rest}
            render={(props) =>
                isAuthenticated === false && loading === false ? (
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
    isAuthenticated: state.authentication.isAuthenticated,
    loading: state.authentication.loading,
});

export default connect(mapStateToProps)(AuthRoute);
