import React from "react";
import { connect } from "react-redux";

const Alert = ({ alerts }) => {
    return (
        <div
            className="top-0 p-3 position-absolute end-0"
            style={{ zIndex: 11 }}
        >
            {alerts !== null &&
                alerts.length > 0 &&
                alerts.map((alert) => (
                    <div
                        key={alert.id}
                        className={`rounded alert-${alert.alertType} mb-2 shadow-sm`}
                        role="alert"
                    >
                        <div className="p-3 mt-2">{alert.msg}</div>

                        <div className="progress" style={{ height: "5px" }}>
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
                ))}
        </div>
    );
};

/** Permet de distribué l'état au propriété */
const mapStateToProps = (state) => ({
    alerts: state.alert, // récupère le réducer alert
});

export default connect(mapStateToProps)(Alert);
