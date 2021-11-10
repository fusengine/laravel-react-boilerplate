/**
 * Permet d'afficher le button de chargement
 */
const LoadingButton = ({ isSubmitting, loadingName, submitName }) => {
    return isSubmitting ? (
        <button className="btn btn-primary " type="button" disabled>
            <span
                className="spinner-border spinner-border-sm"
                role="status"
                aria-hidden="true"
            ></span>{" "}
            {loadingName}
        </button>
    ) : (
        <button className="btn btn-primary">{submitName}</button>
    );
};
export default LoadingButton;
