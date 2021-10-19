import React, { Fragment, useState } from "react";
import { connect } from "react-redux";

/** Components */
import { Header, Card, InputFloat } from "../components";

/**
 * Action redux
 */
import { login } from "../services/";

/**
 * Helpers
 */
import { errorClassField, errorFieldMessage } from "../config";

// CSS
const Login = ({ login, error }) => {
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
    return (
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
    user: state.authentication.user,
    error: state.authentication.error,
    loading: state.authentication.loading,
    isAuthenticated: state.authentication.isAuthenticated,
});

export default connect(mapStateToProps, { login })(Login);
