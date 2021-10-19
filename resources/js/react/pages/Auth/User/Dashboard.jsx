import React, { Fragment } from "react";
import { connect } from "react-redux";
import { Header } from "../../../components";

const Dashboard = () => {
    return (
        <Fragment>
            <Header title="User" content=" admin"></Header>
        </Fragment>
    );
};

const mapStateToProps = (state) => ({
    authentication: state.authentication,
});

export default connect(mapStateToProps)(Dashboard);
