import React from "react";

const InputForm = ({ children, name }) => {
    return (
        <div className="form-floating mb-3 ">
            {children}
            <label htmlFor="floatingInput" className="fw-bold">
                {name}
            </label>
        </div>
    );
};

export default InputForm;
