import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
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
            <li className="nav-item">
                <a
                    className="nav-link dropdown-toggle"
                    data-bs-toggle="dropdown"
                    href="#"
                    role="button"
                    aria-expanded="false"
                >
                    Account
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
        </ul>
    );
};

export default Navbar;
