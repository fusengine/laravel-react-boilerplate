import React, { Suspense, lazy } from "react";
import { Switch, Route } from "react-router-dom";

/**
 * Lazy loading
 * https://benestudio.co/how-to-lazy-load-your-react-components/
 */
const Home = lazy(() => import("../pages/Home"));
const About = lazy(() => import("../pages/About"));
const Login = lazy(() => import("../pages/Login"));
const Register = lazy(() => import("../pages/Register"));

const Routes = () => {
    return (
        <Suspense fallback={<h1>Loading...</h1>}>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/about" exact component={About} />
                <Route path="/login" exact component={Login} />{" "}
                <Route path="/register" exact component={Register} />
            </Switch>
        </Suspense>
    );
};

export default Routes;
