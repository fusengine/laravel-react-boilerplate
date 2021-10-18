import React from "react";

const InputFloat = ({ children, name }) => {
    return (
        <div className="form-floating mb-3 ">
            {children}
            <label htmlFor="floatingInput" className="fw-bold">
                {name}
            </label>
        </div>
    );
};

export default InputFloat;
