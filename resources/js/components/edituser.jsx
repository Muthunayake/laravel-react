import React, { Component } from "react";
import { getUser, updateUsers } from "../services/userservice";
import Joi from "joi-browser";
import Form from "./comman/form/form";
import { Redirect } from "react-router-dom";
import Alert from "./comman/form/alert";

class EditUser extends Form {
    state = {
        data: {
            first_name: "",
            last_name: "",
            address: "",
            country_code: "",
            dob: "",
            email: "",
            image: ""
        },
        errors: {},
        backend_errors: [],
        success: ""
    };

    schema = {
        first_name: Joi.string()
            .required()
            .label("First Name"),
        last_name: Joi.string()
            .required()
            .label("Last Name"),
        address: Joi.string()
            .required()
            .label("Address"),
        country_code: Joi.string()
            .required()
            .max(3)
            .min(2)
            .label("Country Code"),
        dob: Joi.string()
            .required()
            .label("Date of Brith"),
        email: Joi.string()
            .email({ tlds: { allow: false } })
            .required()
            .label("Email"),
        image: Joi.any()
    };

    doSubmit = async () => {
        const { data: user } = this.state;
        const { id } = this.props.match.params;
        const response = await updateUsers(id, user);
        const { success, backend_errors } = response;
        if (!success) {
            this.setState({ backend_errors: Object.values(backend_errors) });
        }
        this.setState({ success });
        console.log(this.state);
    };

    async componentDidMount() {
        const { id } = this.props.match.params;
        const data = await getUser(id);
        this.setState({ data });
    }

    render() {
        const { backend_errors } = this.state;

        if (this.state.success) return <Redirect to="/" />;
        return (
            <div className="row justify-content-center mt-2">
                <div className="col-md-8">
                    <h1>Update User</h1>
                    {backend_errors.length > 0 && (
                        <Alert type="error" errors={backend_errors} />
                    )}
                    <form onSubmit={this.handleSubmit}>
                        {this.renderInput("first_name", "First Name")}
                        {this.renderInput("last_name", "Last Name")}
                        {this.renderInput("address", "Address")}
                        {this.renderInput("country_code", "Country Code")}
                        {this.renderInput("dob", "Date of Brith", "date")}
                        {this.renderInput("email", "Email Address", "email")}
                        {this.renderFile("image", "Image")}
                        {this.renderButton("Save")}
                    </form>
                </div>
            </div>
        );
    }
}

export default EditUser;
