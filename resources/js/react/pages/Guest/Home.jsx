import React, { Fragment } from "react";
import { Header } from "../../components";

const Home = () => {
    return (
        <Fragment>
            <Header
                title="Laravel React Boilerplate"
                content=" This laravel application start-up includes
                react js, react-router, react-helmet,
                bootstrap 5 and Remixicon"
                image="https://cdn.fusengine.ch/logo/Fusengine.svg"
            ></Header>
        </Fragment>
    );
};

export default Home;
