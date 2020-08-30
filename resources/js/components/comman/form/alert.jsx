import React, { Component } from "react";

const Alert = props => {
    console.log(props.type === "error" ? "alert-danger" : "alert-success");
    return (
        <div
            className={
                "alert " +
                (props.type === "error" ? "alert-danger" : "alert-success") +
                " alert-dismissible fade show"
            }
        >
            {props.errors.map(error => error)}
        </div>
    );
};

export default Alert;
