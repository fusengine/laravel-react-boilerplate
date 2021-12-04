import React from "react";
import {
    DropdownMenu,
    Dropdown,
    DropdownToggle,
    DropdownItem,
} from "reactstrap";
import { NavLink } from "react-router-dom";
import { useState } from "react";

const Authenticated = ({ logout }) => {
    const [open, setOpen] = useState(false);
    const toggle = () => setOpen((prevState) => !prevState);

    return (
        <Dropdown nav isOpen={open} toggle={toggle}>
            <DropdownToggle nav caret>
                Profile
            </DropdownToggle>
            <DropdownMenu
                className="mt-2 justify-content-center border-0 shadow-sm"
                flip={true}
            >
                <DropdownItem text>
                    <NavLink
                        className="dropdown-item text-center rounded"
                        activeclassname="active"
                        exact="true"
                        to="/profile/user"
                    >
                        info
                    </NavLink>
                </DropdownItem>
                <DropdownItem text>
                    <a
                        className="dropdown-item text-center rounded"
                        onClick={() => logout()}
                        href="#!"
                    >
                        Logout
                    </a>
                </DropdownItem>
            </DropdownMenu>
        </Dropdown>
    );
};

export default Authenticated;
