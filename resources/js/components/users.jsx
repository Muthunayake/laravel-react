import React, { Component } from "react";
import { getUsers, deleteUsers } from "../services/userservice";
import { paginate } from "../utils/paginate";
import Pagination from "./comman/table/pagination";
import _ from "lodash";
import UserTable from "./usertable";
import { Link, Redirect } from "react-router-dom";

class Users extends Component {
    state = {
        pageSize: 10,
        currentPage: 1,
        users: [],
        sortColumn: {
            path: "first_name",
            order: "asc"
        }
    };

    async componentDidMount() {
        const users = await getUsers();
        this.setState({ users });
    }

    render() {
        const { length: count } = this.state.users;
        const {
            currentPage,
            pageSize,
            users: allUsers,
            sortColumn
        } = this.state;

        const sorted = _.orderBy(
            allUsers,
            [sortColumn.path],
            [sortColumn.order]
        );
        const data = paginate(sorted, currentPage, pageSize);

        return (
            <React.Fragment>
                <div className="row justify-content-end my-4">
                    <div className="col-auto">
                        <Link className="btn btn-primary btn-sm" to="/new-user">
                            <i className="fa fa-plus"></i> New User
                        </Link>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12 users-grid-container">
                        <UserTable
                            data={data}
                            onDelete={this.handleDelete}
                            onEdit={this.handleEdit}
                            onSort={this.handleSort}
                            sortColumn={sortColumn}
                        />
                    </div>
                </div>
                <div className="row justify-content-between">
                    <div className="col-auto">
                        <label style={{ textAlign: "center" }}>
                            <small>
                                showing {data.length} of {allUsers.length}{" "}
                                entries
                            </small>
                        </label>
                    </div>
                    <div className="col-auto">
                        <Pagination
                            itemCount={allUsers.length}
                            pageSize={pageSize}
                            onPageChange={this.handlePageChange}
                            currentPage={currentPage}
                        />
                    </div>
                </div>
            </React.Fragment>
        );
    }

    handleItemSelect = genre => {
        this.setState({
            selectedGenre: genre,
            currentPage: 1
        });
    };

    handlePageChange = page => {
        this.setState({ currentPage: page });
    };

    handleDelete = id => {
        if (deleteUsers(id)) {
            const users = this.state.users.filter(u => u.id !== id);
            this.setState({ users });
        }
    };

    handleEdit = id => {
        window.location = "/user/" + id + "/edit";
    };

    handleLike = movie => {
        const movies = [...this.state.movies];
        const index = movies.indexOf(movie);
        movies[index].like = !movie.like;
        this.setState({ movies });
    };

    handleSort = sortColumn => {
        this.setState({ sortColumn });
    };
}

export default Users;
