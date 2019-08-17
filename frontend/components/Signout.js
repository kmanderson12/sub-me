import React, { Component } from 'react';
import Router from 'next/router';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import { CURRENT_USER_QUERY } from './User';
import styled from 'styled-components';

const SIGN_OUT_MUTATION = gql`
  mutation SIGN_OUT_MUTATION {
    signout {
      message
    }
  }
`;

const goHome = () => {
  Router.push({
    pathname: '/'
  })
}


const Signout = props => (
  <Mutation
    mutation={ SIGN_OUT_MUTATION } refetchQueries={[{query: CURRENT_USER_QUERY }]}>
      {signout => <a onClick={signout}>Sign Out</a> }
    </Mutation>
)

export default Signout;