import React, { Fragment } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { BsCheckLg } from "react-icons/bs";
import { useForm } from "react-hook-form";

import {
    Header,
    Card,
    InputFormFloat,
    LoadingButton,
} from "../../../components";

import {
    registerUser,
    authenticatedSelector,
    errorSelector,
    loadingSelector,
} from "../../../services/redux";
import { wait } from "../../../config";

const Register = ({ registerUser, error, loading }) => {
    const { register, handleSubmit, formState } = useForm();
    const { isSubmitting } = formState;

    /** submit form */
    const submitRegister = async (data) => {
        await wait(2000);
        await registerUser({
            ...data,
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
        <form onSubmit={handleSubmit(submitRegister)}>
            <InputFormFloat
                labelName="Nom complet"
                type="text"
                name="name"
                placeholder="Ajouter nom"
                isSubmitting={isSubmitting}
                errors={error && error.name}
                disabled={isSubmitting}
                isSubmitting={isSubmitting}
                register={register("name", { required: true })}
            />
            <InputFormFloat
                labelName="Adresse email"
                type="email"
                name="email"
                placeholder="Ajouter email"
                errors={error && error.email}
                disabled={isSubmitting}
                isSubmitting={isSubmitting}
                register={register("email", { required: true })}
            />
            <InputFormFloat
                labelName="Mot de passe"
                type="password"
                name="password"
                placeholder="Ajouter email"
                errors={error && error.password}
                disabled={isSubmitting}
                isSubmitting={isSubmitting}
                register={register("password", { required: true })}
            />
            <InputFormFloat
                labelName="Confirmer mot de passe"
                type="password"
                name="password_confirmation"
                placeholder="Ajouter email"
                errors={error && error.password}
                disabled={isSubmitting}
                isSubmitting={isSubmitting}
                register={register("password_confirmation", { required: true })}
            />

            <LoadingButton
                isSubmitting={isSubmitting}
                loadingName="Création du compte en cour"
                submitName="S'inscrire"
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
