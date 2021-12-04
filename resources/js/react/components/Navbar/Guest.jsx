import {
    DropdownMenu,
    Dropdown,
    DropdownToggle,
    DropdownItem,
} from "reactstrap";
import { NavLink } from "react-router-dom";
import { useState } from "react";

const Guest = () => {
    const [open, setOpen] = useState(false);
    const toggle = () => setOpen((prevState) => !prevState);

    return (
        <Dropdown nav isOpen={open} toggle={toggle}>
            <DropdownToggle nav caret>
                Connexions
            </DropdownToggle>
            <DropdownMenu
                flip={true}
                className="mt-2 justify-content-center border-0 shadow-sm"
            >
                <DropdownItem text>
                    <NavLink
                        className="dropdown-item  text-center rounded"
                        activeclassname="active"
                        exact="true"
                        to="/login"
                    >
                        login
                    </NavLink>
                </DropdownItem>
                <DropdownItem text>
                    <NavLink
                        className="dropdown-item text-center rounded"
                        activeclassname="active"
                        exact="true"
                        to="/register"
                    >
                        register
                    </NavLink>
                </DropdownItem>
            </DropdownMenu>
        </Dropdown>
    );
};

export default Guest;
