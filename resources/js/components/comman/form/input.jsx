import React from "react";

const Input = ({ name, label, error, onChange, ...rest }) => {
    return (
        <div className="form-group mb-3">
            <label htmlFor={name}>{label}</label>
            <input
                {...rest}
                name={name}
                id={name}
                onChange={onChange}
                className="form-control form-control-sm"
                placeholder={`enter ${label.toLowerCase()}`}
            />
            {error && <label className="error">{error}</label>}
        </div>
    );
};

export default Input;
