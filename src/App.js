import React, { Component } from "react";
import AppHeader from "./components/AppHeader";
import { Route, Switch } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ErrorPage from "./pages/ErrorPage";

class App extends Component {
  login = () => {
    console.log("로그인");
  };
  render() {
    return (
      <div>
        <AppHeader />
        <Switch>
          <Route exact path={["/", "/login"]} render={() => <Login />}></Route>
          <Route exact path="/signup" component={Signup}></Route>
          <Route path="*" component={ErrorPage}></Route>
        </Switch>
      </div>
    );
  }
}

export default App;
