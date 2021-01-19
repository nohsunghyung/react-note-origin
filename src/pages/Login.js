import React, { Component } from "react";
import Api from "../utils/Api";
import history from "../utils/history";

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: "",
    };
  }
  // input 값 변경함수
  onChangeValue = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    this.setState({
      [name]: value,
    });
  };
  login = () => {
    const { username, password } = this.state;
    const apiParams = {
      username,
      password,
    };
    Api.post("login", apiParams)
      .then((res) => {
        // 사용자의 토큰
        const token = res.data.token;
        // 부모컴포넌트에 token값 전달
        this.props.login(token);
        alert(
          `${res.data.user.username}님 반갑습니다. 메인화면으로 이동합니다.`
        );
        // 페이지 이동을 위한 path 변경
        history.push("/main");
      })
      .catch((error) => {
        alert(`${error.response.data}. 재시도 해주세요`);
        this.setState({
          username: "",
          password: "",
        });
      });
  };
  render() {
    const { username, password } = this.state;
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
                  name="username"
                  type="text"
                  onChange={this.onChangeValue}
                  value={username}
                />
              </div>
              <div>
                <label htmlFor="password">pw: </label>
                <input
                  id="password"
                  type="password"
                  name="password"
                  onChange={this.onChangeValue}
                  value={password}
                />
              </div>
            </div>
            <button type="button" className="btn" onClick={this.login}>
              로그인
            </button>

            <p className="log"></p>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
