import React, { Component } from 'react';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import Form from './styles/Form';
import FormButton from './styles/FormButton';
import Error from './ErrorMessage';
import { CURRENT_USER_QUERY } from './User';

const SIGNUP_MUTATION = gql`
  mutation SIGNUP_MUTATION(
    $email: String!
    $name: String!
    $password: String!
    $phone: String
    $contactPreference: String!
  ) {
    signup(
      email: $email
      name: $name
      password: $password
      phone: $phone
      contactPreference: $contactPreference
    ) {
      id
      email
      name
      phone
      contactPreference
    }
  }
`;

class Signup extends Component {
  state = {
    name: '',
    password: '',
    email: '',
    phone: '',
    contactPreference: '',
  };

  saveToState = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleOptionChange = e => {
    this.setState({
      contactPreference: e.target.value,
    });
  };

  render() {
    return (
      <Mutation
        mutation={SIGNUP_MUTATION}
        variables={this.state}
        refetchQueries={[{ query: CURRENT_USER_QUERY }]}
      >
        {(signup, { error, loading }) => {
          return (
            <Form
              method="POST"
              onSubmit={async e => {
                e.preventDefault();
                await signup();
                this.setState({
                  email: '',
                  name: '',
                  password: '',
                  phone: '',
                  contactPreference: '',
                });
              }}
            >
              <fieldset disabled={loading} aria-busy={loading}>
                <h2>Sign Up For An Account</h2>
                <Error error={error} />
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
                <label htmlFor="email">
                  Email
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={this.state.email}
                    onChange={this.saveToState}
                  />
                </label>
                <label htmlFor="password">
                  Password
                  <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={this.state.password}
                    onChange={this.saveToState}
                  />
                </label>

                <label htmlFor="phone">
                  Phone
                  <input
                    type="phone"
                    name="phone"
                    placeholder="Phone"
                    value={this.state.phone}
                    onChange={this.saveToState}
                  />
                </label>
                <label>Preferred Contact Method</label>
                <label htmlFor="text">
                  Text
                  <input
                    type="radio"
                    name="text"
                    placeholder="text"
                    value="Text"
                    checked={this.state.contactPreference === 'Text'}
                    onChange={this.handleOptionChange}
                  />
                </label>
                <label htmlFor="EmailMessage">
                  Email
                  <input
                    type="radio"
                    name="EmailMessage"
                    placeholder="EmailMessage"
                    value="Email"
                    checked={this.state.contactPreference === 'Email'}
                    onChange={this.handleOptionChange}
                  />
                </label>
                <FormButton type="submit">Sign Up</FormButton>
              </fieldset>
            </Form>
          );
        }}
      </Mutation>
    );
  }
}

export default Signup;
export { SIGNUP_MUTATION };
