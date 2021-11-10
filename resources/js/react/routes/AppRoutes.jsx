import React, { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";

import { Loading } from "../components";
import { Login, About, Home, Register } from "../pages";
import AuthRoute_v2 from "./AuthRoute_v2";

/**
 * Lazy loading
 * https://benestudio.co/how-to-lazy-load-your-react-components/
 */

const UserDashboard = lazy(() => import("../pages/Auth/User/Dashboard"));

const AppRoutes = () => {
    return (
        <Suspense fallback={<Loading />}>
            <Routes>
                <Route path="/" exact element={<Home />} />
                <Route path="/about" exact element={<About />} />

                <Route
                    path="/profile/user"
                    exact
                    element={
                        <AuthRoute_v2>
                            <UserDashboard />
                        </AuthRoute_v2>
                    }
                />

                <Route path="/login" exact element={<Login />} />
                <Route path="/register" exact element={<Register />} />
            </Routes>
        </Suspense>
    );
};

export default AppRoutes;
