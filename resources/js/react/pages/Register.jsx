import React, { Fragment } from "react";
import { Header, Card, InputFloat } from "../components";

const Register = () => {
    return (
        <Fragment>
            <Header title="Register Page"></Header>
            <Card>
                <form>
                    <InputFloat name="Full name">
                        <input
                            type="text"
                            name="name"
                            className="form-control"
                            id="floatingInput"
                            placeholder="John Doe"
                        />
                    </InputFloat>
                    <InputFloat name="Email adresse">
                        <input
                            type="email"
                            name="email"
                            className="form-control"
                            id="floatingInput"
                            placeholder="emaild@adresse.com"
                        />
                    </InputFloat>
                    <InputFloat name="Password">
                        <input
                            type="password"
                            name="password"
                            className="form-control"
                            id="floatingInput"
                            placeholder="my password"
                        />
                    </InputFloat>
                    <InputFloat name="Password confirmation">
                        <input
                            type="password"
                            name="password_confirmation"
                            className="form-control"
                            id="floatingInput"
                            placeholder="my password"
                        />
                    </InputFloat>

                    <button className="btn btn-primary">Register</button>
                </form>
            </Card>
        </Fragment>
    );
};

export default Register;
