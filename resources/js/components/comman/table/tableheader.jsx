import React, { Component } from "react";

class TableHeader extends Component {
    raiseSort = path => {
        const sortColumn = { ...this.props.sortColumn };

        if (sortColumn.path === path) {
            sortColumn.order = sortColumn.order === "asc" ? "desc" : "asc";
        } else {
            sortColumn.path = path;
            sortColumn.order = "asc";
        }
        this.props.onSort(sortColumn);
    };

    renderIcon = column => {
        const { sortColumn } = this.props;
        if (sortColumn.path !== column.path) return null;

        if (sortColumn.order === "asc")
            return <i className="fa fa-sort-asc"></i>;
        else return <i className="fa fa-sort-desc"></i>;
    };

    render() {
        return (
            <thead>
                <tr>
                    {this.props.columns.map(column => (
                        <th
                            key={column.path || column.key}
                            style={{ width: "20%" }}
                            className="sort-column"
                            onClick={() => {
                                this.raiseSort(column.path);
                            }}
                        >
                            {column.lable} {this.renderIcon(column)}
                        </th>
                    ))}
                </tr>
            </thead>
        );
    }
}

export default TableHeader;
