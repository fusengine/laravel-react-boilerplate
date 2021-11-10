const InputForm = ({ labelName, size, ...data }) => {
    return (
        <div className="mb-3">
            <label htmlFor={labelName} className="form-label fw-bold">
                {labelName}
            </label>
            <input
                className={`form-control form-control-${size} ${
                    errors && "is-invalid"
                }`}
                {...data}
            />

            {errors && <div className="invalid-feedback">{errors}</div>}
        </div>
    );
};

export default InputForm;
