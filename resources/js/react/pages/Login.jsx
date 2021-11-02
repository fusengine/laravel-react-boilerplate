import React, { useState } from "react";
import { connect } from "react-redux";
import { Redirect, Link } from "react-router-dom";
import { BsUnlockFill } from "react-icons/bs";

/** Components */
import { Header, Card, InputFloat } from "../components";

import {
    login,
    loadingSelector,
    authenticatedSelector,
} from "../services/redux";

import { errorClassField } from "../config";

// CSS
const Login = ({ login, error, isAuthenticated, loading }) => {
    const [form, setForm] = useState({
        email: "",
        password: "",
    });

    const { email, password } = form;

    /** Cible les champs et récupère la valeur a enregistré en db */
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

    const showLinkRegister = error ? (
        <div className=" mt-3 animate__animated animate__fadeInUp">
            <Link to="/register">Créer un compte?</Link>
        </div>
    ) : null;

    /**
     * Affiche le text en rouge en cas d'erreur
     * @param {*} name
     * @returns
     */
    const errorFieldMessage = (name) => {
        if (name) {
            return <div className="text-danger">{name ? name : ""}</div>;
        }
        return "";
    };

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
                        {errorFieldMessage(error && error.password)}
                    </InputFloat>

                    <button className="btn btn-primary">
                        <BsUnlockFill className="icon-resizer" />
                        Se connecter
                    </button>

                    {showLinkRegister}
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
