import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AppHeader from "../components/common/AppHeader";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import ErrorPage from "../pages/ErrorPage";
import MainPage from "../pages/MainPage";
import ListWrite from "../pages/ListWrite";

export class Routes extends Component {
  render() {
    return (
      <Router>
        <AppHeader />
        <Switch>
          <Route exact path={["/login", "/"]} component={Login} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/main" component={MainPage} />
          <Route exact path="/write" component={ListWrite} />
          <Route exact path="*" component={ErrorPage} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
