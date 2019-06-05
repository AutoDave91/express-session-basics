import React, { Component } from "react";
import store, { LOG_IN_USERNAME, LOG_IN_PASSWORD } from "../store";
import { Link } from "react-router-dom";
import axios from "axios";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      username: store.getState().username,
      password: store.getState().password,
      user: {}
    };
    this.sendLogin = this.sendLogin.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
    this.handleUserName = this.handleUserName.bind(this);
  }

  componentDidMount() {
    store.subscribe(() =>
      this.setState({
        username: store.getState().username,
        password: store.getState().password
      })
    );
  }

  handleUserName(e) {
    let action = {
      type: LOG_IN_USERNAME,
      payload: e.target.value
    };
    store.dispatch(action);
  }

  handlePassword(e) {
    let action = {
      type: LOG_IN_PASSWORD,
      payload: e.target.value
    };
    store.dispatch(action);
  }

  sendLogin() {
    axios
      .post("/auth/chocolate/login", {
        username: this.state.username,
        password: this.state.password
      })
      .then(response => {
        if (response.data) {
          alert("Successful Login");
          this.setState({ user: response.data });
        }
      })
      .catch(()=>alert("Unsuccessful Login"));
  }

  render() {
    console.log(this.state.user);
    return (
      <div className="LOGIN">
        <h3>Enter a name and submit to shop</h3>

        <span className="LOGIN-username-span">
          {/* Enter USERNAME */}
          <h3 id="h3-username">Username: </h3>
          <input
            type="text"
            className="login-input"
            onChange={this.handleUserName}
          />
        </span>
        <span className="LOGIN-username-span">
          {/* Enter PASSWORD */}
          <h3 id="h3-username">Password: </h3>
          <input
            type="password"
            className="login-input"
            onChange={this.handlePassword}
          />
        </span>
        {/* <h2> {this.state.login}</h2> */}

        <button className="Login-button" onClick={this.sendLogin}>
          {" "}
          Login
        </button>

        <Link to="/shop">
          <button className="Login-button"> Shop!</button>
        </Link>
      </div>
    );
  }
}

export default Login;
