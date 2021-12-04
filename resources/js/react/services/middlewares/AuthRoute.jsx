function PrivateRoute({ element, path }) {
    const { authed } = useAuth();

    const ele =
        authed === true ? (
            element
        ) : (
            <Navigate to="/login" replace state={{ path }} />
        );

    return <Route path={path} element={ele} />;
}
