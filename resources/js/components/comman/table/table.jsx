import React, { Component } from "react";
import TableBody from "./tablebody";
import TableHeader from "./tableheader";

class Table extends Component {
    render() {
        const { data, columns, onSort, sortColumn, onDelete } = this.props;
        return (
            <table className="table table-hover ">
                <TableHeader
                    columns={columns}
                    onSort={onSort}
                    sortColumn={sortColumn}
                />
                <TableBody data={data} columns={columns} onDelete={onDelete} />
            </table>
        );
    }
}

export default Table;
