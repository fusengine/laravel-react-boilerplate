import React, { Fragment } from "react";
import { connect } from "react-redux";
import { Link, Navigate } from "react-router-dom";
import { BsCheckLg } from "react-icons/bs";
import { useForm } from "react-hook-form";

import {
    Header,
    Card,
    InputFormFloat,
    LoadingButton,
} from "../../../components";

import {
    wait,
    registerUser,
    authenticatedSelector,
    errorSelector,
    loadingSelector,
} from "../../../services";

const Register = ({ registerUser, isAuthenticated, error, loading }) => {
    const {
        handleSubmit,
        control: controlRegister,
        formState: { isSubmitting },
    } = useForm();

    /** submit form */
    const submitRegister = async (data) => {
        await wait(2000);
        await registerUser({ ...data });
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

    if (isAuthenticated) return <Navigate replace to="/profile/user" />;

    /** Formulaire */
    const sendForm = (
        <form onSubmit={handleSubmit(submitRegister)}>
            <InputFormFloat
                labelName="Nom & Prénom"
                type="text"
                name="name"
                placeholder="Ajouter votre Nom"
                control={controlRegister}
                isSubmit={isSubmitting}
                errors={error && error.name}
                disabled={isSubmitting}
            />
            <InputFormFloat
                labelName="Adresse Email"
                type="email"
                name="email"
                placeholder="Ajouter email"
                control={controlRegister}
                isSubmit={isSubmitting}
                errors={error && error.email}
                disabled={isSubmitting}
            />
            <InputFormFloat
                labelName="Mot de passe"
                type="password"
                name="password"
                placeholder="Ajouter email"
                isSubmit={isSubmitting}
                required={false}
                control={controlRegister}
                errors={error && error.password}
                disabled={isSubmitting}
            />
            <InputFormFloat
                labelName="Confirmer mot de passe"
                type="password"
                name="password_confirmation"
                placeholder="passwordConfirmation"
                isSubmit={isSubmitting}
                required={false}
                control={controlRegister}
                errors={error && error.password}
                disabled={isSubmitting}
            />
            <LoadingButton
                isSubmit={isSubmitting}
                loadingLabelName="Création du compte en cour"
                labelName="S'inscrire"
            />
        </form>
    );

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

export default connect(mapStateToProps, { registerUser })(Register);
