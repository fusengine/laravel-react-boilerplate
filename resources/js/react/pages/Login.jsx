import React, { Fragment } from "react";

/** Components */
import { Header, Card, InputFloat } from "../components";

// CSS
const Login = () => {
    return (
        <Fragment>
            <Header title="Login Page"></Header>
            <Card>
                <form>
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

                    <button className="btn btn-primary">Connect</button>
                </form>
            </Card>
        </Fragment>
    );
};

export default Login;
