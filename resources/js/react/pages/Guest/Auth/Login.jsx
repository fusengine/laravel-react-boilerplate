import React, { Fragment } from "react";
import { connect } from "react-redux";
import { Navigate, Link } from "react-router-dom";
import { BsUnlockFill } from "react-icons/bs";
import { useForm } from "react-hook-form";

/** Components */
import {
    Header,
    Card,
    InputFormFloat,
    LoadingButton,
} from "../../../components";

import {
    login,
    loadingSelector,
    authenticatedSelector,
} from "../../../services/redux";
import { wait } from "../../../config";

const Login = ({ login, error, isAuthenticated, loading }) => {
    const { register, handleSubmit, formState } = useForm();
    const { isSubmitting } = formState;

    /** submit form */
    const submitLogin = async (form) => {
        await wait(2000);
        await login({
            ...form,
        });
    };

    const showLinkRegister =
        !isSubmitting && error ? (
            <div className=" mt-3 animate__animated animate__fadeInUp">
                <Link to="/register">Créer un compte?</Link>
            </div>
        ) : null;

    return isAuthenticated ? (
        <Navigate replace to="/profile/user" />
    ) : (
        <div className="container">
            <Header title="Se connecter"></Header>

            <Card>
                <form onSubmit={handleSubmit(submitLogin)}>
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

                    <LoadingButton
                        isSubmitting={isSubmitting}
                        loadingName="Connexion en cour"
                        submitName={
                            <Fragment>
                                <BsUnlockFill className="icon-resizer" />
                                Se connecter
                            </Fragment>
                        }
                    />

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
