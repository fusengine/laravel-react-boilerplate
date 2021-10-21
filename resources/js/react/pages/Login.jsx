import React, { Fragment, useState } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { BsUnlockFill } from "react-icons/bs";

/** Components */
import { Header, Card, InputFloat } from "../components";

import {
    login,
    loadingSelector,
    authenticatedSelector,
} from "../services/redux";

import { errorClassField, errorFieldMessage } from "../config";

// CSS
const Login = ({ login, error, isAuthenticated, loading }) => {
    const [form, setForm] = useState({
        email: "",
        password: "",
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
        <div className="container">
            <Header title="Se connecter"></Header>
            <Card>
                <form onSubmit={(e) => submitData(e)}>
                    <InputFloat name="Adresse email">
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
                    <InputFloat name="Mot de passe">
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

                    <button className="btn btn-primary">
                        <BsUnlockFill className="icon-resizer" />
                        Se connecter
                    </button>
                </form>
            </Card>
        </div>
    );
};

const mapStateToProps = (state) => ({
    error: state.authentication.error,
    loading: loadingSelector(state),
    isAuthenticated: authenticatedSelector(state),
});

export default connect(mapStateToProps, { login })(Login);
