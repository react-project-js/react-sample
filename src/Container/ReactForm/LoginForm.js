import React, { Component } from "react";
import { Button, FormGroup, FormControl, ControlLabel, Alert } from "react-bootstrap";
import "./Login.css";


export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      show: false
    };
    this.validatesubmit= this.validatesubmit.bind(this);
  }

  validateForm() {
    return this.state.email.length > 0 && this.state.password.length > 0;
  }

  validatesubmit() {
    this.setState({show: true});
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value,
      show: false
    });
  };

  handleSubmit = event => {
    event.preventDefault();
  };

  render() {
  
    const AlretTag = props => {
      return (
        <Alert bsStyle="info" onDismiss={this.ondismiss}>
            Account has been created with Eamil: {this.state.email} and Password: {this.state.password}
        </Alert>
      );
    }

    return (
      <div className="Login">
        <form onSubmit={this.handleSubmit}>
          <FormGroup controlId="email" bsSize="large">
            {this.state.show?<AlretTag></AlretTag>:null}
            <ControlLabel>Email</ControlLabel>
            <FormControl
              autoFocus
              type="email"
              value={this.state.email}
              onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup controlId="password" bsSize="large">
            <ControlLabel>Password</ControlLabel>
            <FormControl
              value={this.state.password}
              onChange={this.handleChange}
              type="password"
            />
          </FormGroup>
          <Button
            block
            bsSize="large"
            onClick={this.validatesubmit}
            disabled={!this.validateForm()}
            type="submit"
          >
            Login
          </Button>
        </form>
      </div>
    );
  }
}
