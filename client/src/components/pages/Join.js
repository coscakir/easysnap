import React, { Component } from "react";
import { Mutation } from "react-apollo";
import { CREATE_USER } from "../../queries";
import Error from "../Error";

const initialState = {
  username: "",
  password: "",
  confirmPassword: ""
};

class Join extends Component {
  state = {
    ...initialState
  };

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onSubmit = (e, createUser) => {
    e.preventDefault();
    createUser().then(data => {
      console.log(data);
      this.resetState();
    });
  };

  formValidate = () => {
    const { username, password, confirmPassword } = this.state;
    return (
      !username || !password || !confirmPassword || password !== confirmPassword
    );
  };

  resetState = () => {
    this.setState({
      ...initialState
    });
  };

  render() {
    const { username, password, confirmPassword } = this.state;
    return (
      <div>
        <Mutation mutation={CREATE_USER} variables={{ username, password }}>
          {(createUser, { loading, error }) => (
            <form
              onSubmit={e => {
                this.onSubmit(e, createUser);
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
                <input
                  onChange={this.onChange}
                  type="password"
                  name="confirmPassword"
                  placeholder="confirm password"
                  value={confirmPassword}
                />
              </label>
              <label>
                <button disabled={loading || this.formValidate()}>Join</button>
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

export default Join;
