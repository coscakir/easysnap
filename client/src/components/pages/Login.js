import React, { Component } from "react";
import { Mutation } from "react-apollo";
import { SIGNIN_USER } from "../../queries";
import Error from "../Error";

const initialState = {
  username: "",
  password: ""
};

class Login extends Component {
  state = {
    ...initialState
  };

  onChange = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  };

  onSubmit = (e, signinUser) => {
    e.preventDefault();
    signinUser().then(data => {
      console.log(data);
      this.resetState();
    });
  };

  resetState = () => {
    this.setState({
      ...initialState
    });
  };

  formValidate = () => {
    const { username, password } = this.state;
    return !username || !password;
  };

  render() {
    const { username, password } = this.state;
    return (
      <div>
        <Mutation mutation={SIGNIN_USER} variables={{ username, password }}>
          {(signinUser, { loading, error }) => (
            <form
              onSubmit={e => {
                this.onSubmit(e, signinUser);
              }}
              className="user-form"
            >
              <label>
                <input
                  onChange={this.onChange}
                  type="text"
                  name="username"
                  placeholder="username"
                  value={username}
                />
              </label>
              <label>
                <input
                  onChange={this.onChange}
                  type="password"
                  name="password"
                  placeholder="password"
                  value={password}
                />
              </label>
              <label>
                <button disabled={loading || this.formValidate()}>Login</button>
              </label>
              {loading && <div>loading...</div>}
              {error && <Error error={error} />}
            </form>
          )}
        </Mutation>
      </div>
    );
  }
}

export default Login;
