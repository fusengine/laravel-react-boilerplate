const InputFormFloat = ({
    labelName,
    register,
    isSubmitting,
    errors,
    ...data
}) => {
    return (
        <div className="form-floating  mb-3">
            <input
                className={`form-control ${
                    !isSubmitting && errors ? "is-invalid" : ""
                } `}
                id={`float${labelName}`}
                {...data}
                {...register}
            />
            <label htmlFor={`float${labelName}`} className="form-label fw-bold">
                {labelName}
            </label>

            {!isSubmitting
                ? errors && <div className="invalid-feedback">{errors}</div>
                : ""}
        </div>
    );
};

export default InputFormFloat;
