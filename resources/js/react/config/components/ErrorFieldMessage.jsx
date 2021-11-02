export const ErrorFieldMessage = ({ name }) => {
    return <div className="text-danger">{name ? name : ""}</div>;
};
