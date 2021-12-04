import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import { NavItem, Nav } from "reactstrap";

import {
    history,
    logoutUser,
    authenticatedSelector,
    loadingSelector,
} from "../../services";

import Authenticated from "./Authenticated";
import Guest from "./Guest";

const Navbar = ({ logoutUser, isAuthenticated, loading }) => {
    const logout = () => {
        logoutUser();
        history.push("/login");
    };

    return (
        <Nav pills className="justify-content-center mt-4">
            <NavItem>
                <NavLink
                    className="nav-link"
                    exact="true"
                    activeclassname="active"
                    to="/"
                >
                    <i className="ri-home-2-fill"></i> Home
                </NavLink>
            </NavItem>
            <NavItem>
                <NavLink
                    className="nav-link"
                    activeclassname="active"
                    to="/about"
                >
                    About
                </NavLink>
            </NavItem>
            {loading && isAuthenticated ? (
                <Authenticated logout={logout} />
            ) : (
                <Guest />
            )}
        </Nav>
    );
};

const mapStateToProps = (state) => ({
    isAuthenticated: authenticatedSelector(state),
    loading: loadingSelector(state),
});

export default connect(mapStateToProps, { logoutUser })(Navbar);
