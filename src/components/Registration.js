import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Button, TextField } from "@material-ui/core";
import { registerUserAction } from "../actions";

class Registration extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      password: ""
    };
  }

  handleName = e => this.setState({ name: e.target.value });

  handlePassword = e => this.setState({ password: e.target.value });

  handleRegistration = () =>
    this.props.registerUserAction(this.state.name, this.state.password);

  render() {
    const { name, password } = this.state;
    const { loading, succesRegister, errorMessage } = this.props;

    return (
      <React.Fragment>
        {!loading && !succesRegister && errorMessage && <p>{errorMessage}</p>}
        {!loading && succesRegister && <p>User was register successfuly</p>}

        <form noValidate autoComplete="off">
          <TextField
            label="Name"
            type="text"
            onChange={this.handleName}
            name="name"
            value={name}
          />
          <TextField
            label="Password"
            type="password"
            onChange={this.handlePassword}
            name="password"
            value={password}
          />
          <Button
            variant="contained"
            color="primary"
            type="button"
            onClick={this.handleRegistration}
          >
            Register
          </Button>
        </form>
      </React.Fragment>
      );
  }
}

Registration.props = {
  registerUserAction: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  succesRegister: PropTypes.bool.isRequired,
  errorMessage: PropTypes.string
}

export default connect(
  state => ({...state.registerUserReducer}),  
  {
    registerUserAction
  }
)(Registration);
