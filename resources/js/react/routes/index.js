import React, { Suspense, lazy } from "react";
import { Switch, Route } from "react-router-dom";

import { Loading } from "../components";

import { Login, About, Home, Register } from "../pages";

/**
 * Route authentifié
 */
import AuthRoute from "./AuthRoute";

/**
 * Lazy loading
 * https://benestudio.co/how-to-lazy-load-your-react-components/
 */

const UserDashboard = lazy(() => import("../pages/Auth/User/Dashboard"));

const Routes = () => {
    return (
        <Suspense fallback={<Loading />}>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/about" exact component={About} />
                <Route path="/login" exact component={Login} />
                <Route path="/register" exact component={Register} />
                <AuthRoute
                    path="/profile/user"
                    exact
                    component={UserDashboard}
                />
            </Switch>
        </Suspense>
    );
};

export default Routes;
