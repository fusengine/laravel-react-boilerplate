import React, { Fragment } from "react";

const Header = ({ title, content, image, children }) => {
    return (
        <header className="fuse-user container mt-3 mb-2">
            <div className="bg-white border-blue-full p-5 rounded-2">
                <div className="row align-items-center justify-content-center">
                    <div className="col-lg-8 col-xl-7 col-xxl-6">
                        <div className="my-2 text-center text-xl-start">
                            <h1 className="display-5 fw-bolder mb-2 text-center">
                                {title}
                            </h1>
                            <p className="lead fw-normal text-50 mb-4">
                                {content}
                            </p>
                            {children}
                        </div>
                    </div>
                    {image ? (
                        <div className="col-xl-5 col-xxl-6 d-none d-xl-block text-center">
                            <img
                                className="img-fluid"
                                src={image}
                                width="300"
                                alt={title}
                            />
                        </div>
                    ) : (
                        ""
                    )}
                </div>
            </div>
        </header>
    );
};

export default Header;
