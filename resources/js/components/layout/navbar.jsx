import React, { Component } from "react";
import { NavLink, Link } from "react-router-dom";

const NavBar = props => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-info">
            <Link className="navbar-brand" to="/">
                Dashboard
            </Link>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/">
                            Home
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/new-user">
                            New User
                        </NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default NavBar;
