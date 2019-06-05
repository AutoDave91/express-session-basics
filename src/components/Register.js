import React, { Component } from "react";
import store, { LOG_IN_USERNAME, LOG_IN_PASSWORD } from "../store";
import { Link } from "react-router-dom";
import axios from "axios";

class Register extends Component {
  constructor() {
    super();
    this.state = {
      username: store.getState().username,
      password: store.getState().password
    };
 
    this.handlePassword = this.handlePassword.bind(this)
    this.handleUserName = this.handleUserName.bind(this)
    this.sendRegistration = this.sendRegistration.bind(this)
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

  sendRegistration(){
     axios.post('/auth/chocolate/register', {username: this.state.username, password: this.state.password}).then(response => console.log(response.data))
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
        <button className="Login-button" onClick={this.sendRegistration}> Register Account</button>
        <Link to="/login">
          <button className="Login-button" > Login!</button>
        </Link>
      </div>
    );
  }
}

export default Register;
