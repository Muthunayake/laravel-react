import React, { Component } from "react";
import axios from "axios";
import { Switch, Route, Redirect } from "react-router-dom";
import NavBar from "./layout/navbar";
import Users from "./users";
import NewUser from "./newuser";
import EditUser from "./edituser";

class App extends Component {
    render() {
        return (
            <React.Fragment>
                <NavBar />
                <main className="container">
                    <Switch>
                        <Route
                            path="/not-found"
                            render={() => (
                                <h1 className="text-center my-5">
                                    Page not Found
                                </h1>
                            )}
                        />
                        <Route path="/user/:id/edit" component={EditUser} />
                        <Route path="/new-user" component={NewUser} />
                        <Route path="/" exact component={Users} />
                        <Redirect to="/not-found" />
                    </Switch>
                </main>
            </React.Fragment>
        );
    }
}

export default App;
