import React, { Fragment } from "react";
import { connect } from "react-redux";

import { Header, Loading } from "../../../components";

import {
    authenticatedSelector,
    loadingSelector,
    loadingUserSelector,
} from "../../../services";

const Dashboard = ({ user, loading, isAuthenticated }) => {
    console.log(user);
    return !isAuthenticated && loading && user ? (
        <Loading />
    ) : (
        <Fragment>
            <Header title={`Compte de ${user.name}`}>
                <p>
                    <strong>Nom:</strong>
                    {(" ", user.name)}
                    <br />
                    <strong>email:</strong>
                    {(" ", user.email)}
                    <br />
                </p>
            </Header>
        </Fragment>
    );
};

const mapStateToProps = (state) => ({
    user: loadingUserSelector(state),
    loading: loadingSelector(state),
    isAuthenticated: authenticatedSelector(state),
});

export default connect(mapStateToProps)(Dashboard);
