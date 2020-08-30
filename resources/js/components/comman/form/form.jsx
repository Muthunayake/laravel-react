import React, { Component } from "react";
import Joi from "joi-browser";
import Input from "./input";
import Resizer from "react-image-file-resizer";
import { Promise } from "es6-promise";

class Form extends Component {
    state = {
        data: {},
        errors: {}
    };

    handleChange = ({ currentTarget: input }) => {
        const data = { ...this.state.data };
        data[input.name] = input.value;
        this.setState({ data });
    };

    resizeFile = file =>
        new Promise(resolve => {
            Resizer.imageFileResizer(
                file,
                300,
                300,
                "JPEG",
                100,
                0,
                uri => {
                    resolve(uri);
                },
                "base64"
            );
        });

    handleFileChange = async event => {
        const index = event.currentTarget.name;
        const image = await this.resizeFile(event.target.files[0]);
        const data = { ...this.state.data };
        data[index] = image;
        this.setState({ data });
    };

    validate = () => {
        const option = { abortEarly: false };
        const errors = {};
        const { error } = Joi.validate(this.state.data, this.schema, option);
        if (!error) return null;

        for (let item of error.details) errors[item.path[0]] = item.message;

        return errors;
    };

    handleSubmit = e => {
        e.preventDefault();
        const errors = this.validate();
        this.setState({ errors: errors || {} });
        if (errors) return;

        this.doSubmit();
    };

    renderButton = lable => {
        return <button className="btn btn-primary float-right">{lable}</button>;
    };

    renderInput = (name, lable, type = "text") => {
        const { data, errors } = this.state;

        return (
            <Input
                value={data[name]}
                name={name}
                label={lable}
                onChange={this.handleChange}
                error={errors[name]}
                type={type}
            />
        );
    };

    renderFile = (name, lable, type = "file") => {
        const { data, errors } = this.state;

        return (
            <Input
                name={name}
                label={lable}
                onChange={this.handleFileChange}
                error={errors[name]}
                type={type}
            />
        );
    };
}

export default Form;
