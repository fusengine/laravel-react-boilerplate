import React, { Fragment, useState } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

/** Components */
import { Header, Card, InputFloat } from "../components";

import { login, loadingSelector, authenticatedSelector } from "../services/";
import { errorClassField, errorFieldMessage } from "../config";

// CSS
const Login = ({ login, error, isAuthenticated, loading }) => {
    const [form, setForm] = useState({
        email: "a@a.ch",
        password: "111111",
    });

    const { email, password } = form;

    /** target input field */
    const handleChange = (name) => (e) => {
        setForm({ ...form, [name]: e.target.value });
    };

    /** submit form */
    const submitData = async (e) => {
        e.preventDefault();

        await login({
            ...form,
        });
    };

    // // Redirect si connecté
    // if (isAuthenticated) {
    //     return <Redirect to="/profile/user" />;
    // }

    return isAuthenticated ? (
        <Redirect to="/profile/user" />
    ) : (
        <Fragment>
            <Header title="Login Page"></Header>
            <Card>
                <form onSubmit={(e) => submitData(e)}>
                    <InputFloat name="Email adresse">
                        <input
                            type="email"
                            name="email"
                            value={email}
                            onChange={handleChange("email")}
                            className={errorClassField(error && error.email)}
                            id="floatingInput"
                            placeholder="emaild@adresse.com"
                        />
                        {errorFieldMessage(error && error.email)}
                    </InputFloat>
                    <InputFloat name="Password">
                        <input
                            type="password"
                            name="password"
                            value={password}
                            onChange={handleChange("password")}
                            className={errorClassField(error && error.password)}
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

const mapStateToProps = (state) => ({
    error: state.authentication.error,
    loading: loadingSelector(state),
    isAuthenticated: authenticatedSelector(state),
});

export default connect(mapStateToProps, { login })(Login);
