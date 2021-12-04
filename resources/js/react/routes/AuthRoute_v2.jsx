import { Navigate } from "react-router-dom";
import { connect } from "react-redux";
import {
    getSessionStorage,
    authenticatedSelector,
    loadingUserSelector,
} from "../services";

/** Permet de dire si on est authentifié */
const AuthRoute_v2 = ({ isAuthenticated, loading, children }) => {
    const verifyAuth = !isAuthenticated && loading;
    const storage = getSessionStorage();

    return !storage && verifyAuth ? <Navigate replace to="/login" /> : children;
};

/** Extrait l'état au propriété */
const mapStateToProps = (state) => ({
    isAuthenticated: authenticatedSelector(state),
    loading: loadingUserSelector(state),
});

export default connect(mapStateToProps)(AuthRoute_v2);
