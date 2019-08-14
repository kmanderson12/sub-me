import React, { Component } from 'react';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import Form from './styles/Form';
import Error from './ErrorMessage';
import { CURRENT_USER_QUERY } from './User';

const SIGNUP_MUTATION = gql`
  mutation SIGNUP_MUTATION(
    $email: String!
    $name: String!
    $password: String!
  ) {
    signup(email: $email, name: $name, password: $password) {
      id
      email
      name
    }
  }
`;

class RequestASub extends Component {
  state = {
    name: '',
    date: ''
  };

  saveToState = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  //TODO: Add loading and error with mutation
  render() {
    return (
      <div>
        <Form
          method="POST"
          onSubmit={e => {
            e.preventDefault();
            console.log(this.state);
            this.setState({
              name: '',
              date: ''
            });
          }}
        >
          <fieldset>
            <h2>I need a sub!</h2>

            <label htmlFor="name">
              Name
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={this.state.name}
                onChange={this.saveToState}
              />
            </label>
            <label htmlFor="date">
              Date
              <input
                type="date"
                name="date"
                placeholder="Date"
                value={this.state.date}
                onChange={this.saveToState}
              />
            </label>

            <button type="submit">Sub Me!</button>
          </fieldset>
        </Form>
      </div>
    );
  }
}

export default RequestASub;
