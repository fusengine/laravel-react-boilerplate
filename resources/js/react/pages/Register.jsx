import React, { Fragment, useState } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

import { Header, Card, InputFloat } from "../components";

import { register, authenticatedSelector } from "../services/";
import { errorClassField, errorFieldMessage } from "../config";

const Register = ({ register, error, isAuthenticated }) => {
    const [form, setForm] = useState({
        name: "",
        email: "",
        password: "",
        password_confirmation: "",
    });

    const { name, email, password, password_confirmation } = form;

    /** target input field */
    const handleChange = (name) => (e) => {
        setForm({ ...form, [name]: e.target.value });
    };

    /** submit form */
    const submitData = async (e) => {
        e.preventDefault();

        await register({
            ...form,
        });
    };
    // Redirect si connecté
    if (isAuthenticated) {
        return <Redirect to="/profile/user" />;
    }
    return (
        <Fragment>
            <Header title="Register Page"></Header>
            <Card>
                <form onSubmit={(e) => submitData(e)}>
                    <InputFloat name="Full name">
                        <input
                            type="text"
                            name="name"
                            onChange={handleChange("name")}
                            className={errorClassField(error && error.name)}
                            id="floatingInput"
                            placeholder="John Doe"
                        />
                        {errorFieldMessage(error && error.name)}
                    </InputFloat>
                    <InputFloat name="Email adresse">
                        <input
                            type="email"
                            name="email"
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
                            onChange={handleChange("password")}
                            className={errorClassField(error && error.password)}
                            id="floatingInput"
                            placeholder="my password"
                        />
                    </InputFloat>
                    <InputFloat name="Password confirmation">
                        <input
                            type="password"
                            name="password_confirmation"
                            onChange={handleChange("password_confirmation")}
                            className={errorClassField(error && error.password)}
                            id="floatingInput"
                            placeholder="my password"
                        />
                        {errorFieldMessage(error && error.password)}
                    </InputFloat>

                    <button className="btn btn-primary">Register</button>
                </form>
            </Card>
        </Fragment>
    );
};

const mapStateToProps = (state) => ({
    error: state.authentication.error,
    isAuthenticated: authenticatedSelector(state),
});

export default connect(mapStateToProps, { register })(Register);
