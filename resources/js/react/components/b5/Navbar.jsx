import React, { Fragment } from "react";
import { connect } from "react-redux";
import { NavLink, withRouter } from "react-router-dom";

import { history } from "../../config";

import {
    logoutUser,
    authenticatedSelector,
    loadingSelector,
} from "../../services";

const Navbar = ({ logoutUser, isAuthenticated, loading }) => {
    const logout = () => {
        logoutUser();
        history.push("/login");
    };

    const navGuest = (
        <li className="nav-item">
            <a
                className="nav-link dropdown-toggle"
                data-bs-toggle="dropdown"
                href="#"
                role="button"
                aria-expanded="false"
            >
                Connexion
            </a>
            <ul className="dropdown-menu">
                <li>
                    <NavLink
                        className="dropdown-item"
                        activeClassName="active"
                        exact={true}
                        to="/login"
                    >
                        login
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        className="dropdown-item"
                        activeClassName="active"
                        exact={true}
                        to="/register"
                    >
                        register
                    </NavLink>
                </li>
            </ul>
        </li>
    );

    const navAuthenticated = (
        <li className="nav-item">
            <a
                className="nav-link dropdown-toggle"
                data-bs-toggle="dropdown"
                href="#"
                role="button"
                aria-expanded="false"
            >
                Compte
            </a>
            <ul className="dropdown-menu">
                <li>
                    <NavLink
                        className="dropdown-item"
                        activeClassName="active"
                        exact={true}
                        to="/profile/user"
                    >
                        info
                    </NavLink>
                </li>
                <li>
                    <a
                        className="dropdown-item"
                        onClick={() => logout()}
                        href="#!"
                    >
                        Logout
                    </a>
                </li>
            </ul>
        </li>
    );

    return (
        <ul className="nav nav-pills justify-content-center mt-4">
            <li className="nav-item">
                <NavLink
                    className="nav-link"
                    exact={true}
                    activeClassName="active"
                    to="/"
                >
                    <i className="ri-home-2-fill"></i> Home
                </NavLink>
            </li>
            <li className="nav-item">
                <NavLink
                    className="nav-link"
                    activeClassName="active"
                    to="/about"
                >
                    About
                </NavLink>
            </li>
            {
                <Fragment>
                    {loading && isAuthenticated ? navAuthenticated : navGuest}
                </Fragment>
            }
        </ul>
    );
};

const mapStateToProps = (state) => ({
    isAuthenticated: authenticatedSelector(state),
    loading: loadingSelector(state),
});

export default connect(mapStateToProps, { logoutUser })(withRouter(Navbar));
