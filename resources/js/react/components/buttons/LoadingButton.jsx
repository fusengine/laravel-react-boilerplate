import { Button, Spinner } from "reactstrap";

/**
 * Permet d'afficher le button de chargement
 */
const LoadingButton = ({ isSubmit, labelName, loadingLabelName }) => {
    return isSubmit ? (
        <Button block color="primary" className="hstack disabled">
            <Spinner color="light" className="me-1" size="sm"></Spinner>
            {loadingLabelName}
        </Button>
    ) : (
        <Button block color="primary">
            {labelName}
        </Button>
    );
};
export default LoadingButton;
