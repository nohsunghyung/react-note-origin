import React, { Component } from "react";
import { connect } from "react-redux";
import { onChangeValue, loginUser } from "../modules/login";

class Login extends Component {
  onChangeValue = (e) => {
    const { onChangeValue } = this.props;
    const name = e.target.name;
    const value = e.target.value;
    onChangeValue(name, value);
  };
  loginUser = () => {
    const { username, password, loginUser } = this.props;
    loginUser({ username, password });
  };
  render() {
    const { username, password } = this.props;
    return (
      <div>
        <h1 className="page-header">로그인</h1>
        <div className="contents">
          <div className="form-wrapper form-wrapper-sm">
            <div className="form">
              <div>
                <label htmlFor="username">id:</label>
                <input
                  id="username"
                  type="text"
                  name="username"
                  value={username}
                  onChange={this.onChangeValue}
                />
              </div>
              <div>
                <label htmlFor="password">pw: </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  value={password}
                  onChange={this.onChangeValue}
                />
              </div>
              <button type="submit" className="btn" onClick={this.loginUser}>
                로그인
              </button>
            </div>
            <p className="log"></p>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(
  ({ login }) => ({
    username: login.username,
    password: login.password,
  }),
  {
    onChangeValue,
    loginUser,
  }
)(Login);
