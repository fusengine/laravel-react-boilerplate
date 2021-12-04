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

import { wait, login, authenticatedSelector } from "../../../services";

const Login = ({ login, error, isAuthenticated }) => {
    const {
        handleSubmit,
        control: controlLogin,
        formState: { isSubmitting },
    } = useForm();

    /** submit form */
    const submitLogin = async (form) => {
        await wait(2000);
        await login({ ...form });
    };

    const showLinkRegister =
        !isSubmitting && error ? (
            <div className=" mt-3 animate__animated animate__fadeInUp">
                <Link to="/register">Créer un compte?</Link>
            </div>
        ) : null;

    if (isAuthenticated) return <Navigate replace to="/profile/user" />;

    return (
        <div className="container">
            <Header title="Se connecter"></Header>
            <Card>
                <form onSubmit={handleSubmit(submitLogin)}>
                    <InputFormFloat
                        labelName="Adresse Email"
                        type="email"
                        name="email"
                        placeholder="Ajouter email"
                        control={controlLogin}
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
                        control={controlLogin}
                        errors={error && error.password}
                        disabled={isSubmitting}
                    />

                    <LoadingButton
                        isSubmit={isSubmitting}
                        loadingLabelName="Connexion en cour"
                        labelName={
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
    isAuthenticated: authenticatedSelector(state),
});

export default connect(mapStateToProps, { login })(Login);
