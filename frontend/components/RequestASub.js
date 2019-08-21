import React, { Component } from 'react';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import { format } from 'date-fns';
import Form from './styles/Form';
import Error from './ErrorMessage';
import { CURRENT_USER_QUERY } from './User';

const HANDLE_ABSENCE_MUTATION = gql`
  mutation HANDLE_ABSENCE_MUTATION($name: String!, $date: String!) {
    handleAbsence(name: $name, date: $date) {
      message
    }
  }
`;

class RequestASub extends Component {
  state = {
    name: '',
    date: '',
  };

  saveToState = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  setDate = date => this.setState({ date: format(date, 'yyyy-MM-dd') });

  //TODO: Add loading and error with mutation
  render() {
    return (
      <Mutation
        mutation={HANDLE_ABSENCE_MUTATION}
        variables={this.state}
        refetchQueries={[{ query: CURRENT_USER_QUERY }]}
      >
        {(handleAbsence, { error, loading }) => {
          return (
            <Form
              method="POST"
              onSubmit={async e => {
                e.preventDefault();
                console.log(this.state);
                await handleAbsence();
                this.setState({
                  name: '',
                  date: '',
                });
              }}
            >
              <fieldset>
                <legend>Request A Sub</legend>

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
          );
        }}
      </Mutation>
    );
  }
}

export default RequestASub;
