import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import { Navbar } from "./components";
import Routes from "./routes";

const App = () => {
    return (
        <Router>
            <Navbar />
            <Route component={Routes} />
        </Router>
    );
};

export default App;
