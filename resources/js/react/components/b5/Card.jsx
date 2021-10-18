import React from "react";

const Card = ({ children }) => {
    return (
        <div className="container mb-2 bg-light rounded-2 bg-white border-blue fuse-card shadow-sm p-3">
            {children}
        </div>
    );
};

export default Card;
