import React, { Fragment, useState } from "react";
import { connect } from "react-redux";
import { Redirect, Link } from "react-router-dom";
import { BsCheckLg } from "react-icons/bs";

import { Header, Card, InputFloat } from "../components";

import {
    register,
    authenticatedSelector,
    errorSelector,
    loadingSelector,
} from "../services/redux";
import { errorClassField, errorFieldMessage } from "../config";

const Register = ({ register, error, isAuthenticated, loading }) => {
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

    /** si formulaire okay */
    const registerSuccess = (
        <Fragment>
            <div className="card text-dark bg-info card-body animate__animated animate__fadeIn border-0 text-white shadow-sm fs-6 d-inline">
                <BsCheckLg className="icon-resizer" /> Compte créé avec succès.
            </div>
            <div className=" mt-3 animate__animated animate__fadeInUp">
                <Link to="/login">Connecté vous.</Link>
            </div>
        </Fragment>
    );

    /** Formulaire */
    const sendForm = (
        <form onSubmit={(e) => submitData(e)}>
            <InputFloat name="Nom complet">
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
            <InputFloat name="Adresse email">
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
            <InputFloat name="Mot de passe">
                <input
                    type="password"
                    name="password"
                    onChange={handleChange("password")}
                    className={errorClassField(error && error.password)}
                    id="floatingInput"
                    placeholder="my password"
                />
                {errorFieldMessage(error && error.password)}
            </InputFloat>
            <InputFloat name="Confirmer le mot de passe">
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

            <button className="btn btn-primary">s'inscrire</button>
        </form>
    );

    // Redirect si connecté
    if (isAuthenticated) {
        return <Redirect to="/profile/user" />;
    }
    return (
        <Fragment>
            <Header title="S'inscrire"></Header>
            <Card>{loading ? registerSuccess : sendForm}</Card>
        </Fragment>
    );
};

const mapStateToProps = (state) => ({
    error: errorSelector(state),
    loading: loadingSelector(state),
    isAuthenticated: authenticatedSelector(state),
});

export default connect(mapStateToProps, { register })(Register);
