import React from "react";
import { connect } from "react-redux";

const Alert = ({ alerts }) => {
    const alertMessage =
        alerts !== null &&
        alerts.length > 0 &&
        alerts.map((alert) => (
            <div
                id="alert-message"
                key={alert.id}
                className={`rounded alert-${alert.alertType}  animate__animated animate__fadeIn mb-2 shadow`}
                role="alert"
            >
                <div className="p-3 mt-1 ">{alert.msg}</div>
                <div className="progress border-alert">
                    <div
                        className={`progress-bar rounded-bottom progress-bar-animated progress-bar-striped bg-${alert.alertType}`}
                        role="progressbar"
                        style={{ width: "100%" }}
                        aria-valuenow="100"
                        aria-valuemin="0"
                        aria-valuemax="100"
                    ></div>
                </div>
            </div>
        ));

    return (
        <div
            className="top-0 p-3 position-absolute end-0"
            style={{ zIndex: 1000 }}
        >
            {alertMessage}
        </div>
    );
};

/** Permet de distribué l'état au propriété */
const mapStateToProps = (state) => ({
    alerts: state.alert, // récupère le réducer alert
});

export default connect(mapStateToProps)(Alert);
