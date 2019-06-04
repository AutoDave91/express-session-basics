import React, { Component } from "react";
import store, { LOG_IN_USERNAME, LOG_IN_PASSWORD } from "../store";
import { Link } from "react-router-dom";

class Register extends Component {
  constructor() {
    super();
    this.state = {
      username: store.getState().username,
      password: store.getState().password
    };
    this.sendLogin = this.sendLogin.bind(this)
    this.handlePassword = this.handlePassword.bind(this)
    this.handleUserName = this.handleUserName.bind(this)
  }

  componentDidMount() {


    store.subscribe(() => this.setState({ username: store.getState().username, password: store.getState().password}) );
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

  sendLogin(){
      console.log(this.state.username)
      console.log(this.state.password)
  }

  render() {
      
    return (
      <div className="LOGIN">
        <h3>Register a new account</h3>
        
        <span className="LOGIN-username-span">

        {/* Enter USERNAME */}
          <h3 id="h3-username">Username: </h3>
          <input
            placeholder='Enter a unique username'
            type="text"
            className="login-input"
            onChange={this.handleUserName}
          />
        </span>
        <span className="LOGIN-username-span">

         {/* Enter PASSWORD */}
          <h3 id="h3-username">Password: </h3>
          <input
          placeholder='Enter a unique password'
            type="password"
            className="login-input"
            onChange={this.handlePassword}
          />
        </span>
        {/* <h2> {this.state.login}</h2> */}
        <Link to="/shop">
          <button className="Login-button" onClick={this.sendLogin}> Shop!</button>
        </Link>
      </div>
    );
  }
}

export default Register;
