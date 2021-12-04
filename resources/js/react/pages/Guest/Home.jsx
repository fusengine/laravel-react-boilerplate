import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { Header } from "../../components";

const Home = () => {
    return (
        <div className="px-4 py-5 my-5 text-center">
            <img
                className="d-block mx-auto mb-4"
                src="https://cdn.fusengine.ch/logo/Fusengine.svg"
                alt=""
                width="180"
                height="200"
            />
            <h1 className="display-5 fw-bold">Laravel React</h1>
            <div className="col-lg-6 mx-auto">
                <p className="lead mb-4">
                    This laravel application start-up includes react js,
                    react-router, react-helmet, bootstrap 5 and Remixicon.
                </p>
                <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
                    <Link
                        to="/login"
                        className="btn btn-primary btn-lg px-4 gap-3"
                    >
                        Login
                    </Link>
                    <Link
                        to="/register"
                        className="btn btn-outline-secondary btn-lg px-4"
                    >
                        Register
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Home;
