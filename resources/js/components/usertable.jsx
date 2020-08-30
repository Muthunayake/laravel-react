import React, { Component } from "react";
import Table from "./comman/table/table";

class UserTable extends Component {
    columns = [
        {
            path: "image",
            lable: "Image",
            content: user => (
                <a href={user.image} target="_blank">
                    <img
                        src={user.image}
                        className="user-image img-thumbnail"
                    />
                </a>
            )
        },
        { path: "first_name", lable: "First Name" },
        { path: "last_name", lable: "Last Name" },
        { path: "address", lable: "Address" },
        { path: "country_code", lable: "Country Code" },
        { path: "dob", lable: "Dob" },
        { path: "email", lable: "Email" },
        {
            key: "edit",
            content: user => (
                <button
                    className="btn btn-primary btn-sm"
                    onClick={() => {
                        this.props.onEdit(user.id);
                    }}
                >
                    <i className="fa fa-pencil"></i>
                </button>
            )
        },
        {
            key: "delete",
            content: user => (
                <button
                    className="btn btn-danger btn-sm"
                    onClick={() => {
                        this.props.onDelete(user.id);
                    }}
                >
                    <i className="fa fa-trash"></i>
                </button>
            )
        }
    ];
    render() {
        const { data, onDelete, onSort, sortColumn } = this.props;
        return (
            <Table
                columns={this.columns}
                data={data}
                onDelete={onDelete}
                onSort={onSort}
                sortColumn={sortColumn}
            />
        );
    }
}

export default UserTable;
