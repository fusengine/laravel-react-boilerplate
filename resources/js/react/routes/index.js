import React, { Suspense, lazy } from "react";
import { Switch, Route } from "react-router-dom";

import { Loading } from "../components";

/**
 * Route authentifié
 */
import AuthRoute from "./AuthRoute";

/**
 * Lazy loading
 * https://benestudio.co/how-to-lazy-load-your-react-components/
 */
const Home = lazy(() => import("../pages/Home"));
const About = lazy(() => import("../pages/About"));
const Login = lazy(() => import("../pages/Login"));
const Register = lazy(() => import("../pages/Register"));
const UserDashboard = lazy(() => import("../pages/Auth/User/Dashboard"));

const Routes = () => {
    return (
        <Suspense fallback={<Loading />}>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/about" component={About} />
                <Route path="/login" component={Login} />{" "}
                <Route path="/register" component={Register} />
                <AuthRoute path="/user/dashboard" component={UserDashboard} />
            </Switch>
        </Suspense>
    );
};

export default Routes;
