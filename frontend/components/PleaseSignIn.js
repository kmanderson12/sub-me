import { Query } from 'react-apollo';
import { CURRENT_USER_QUERY } from './User';
import SignIn from './Signin';
import styled from 'styled-components';

const Centered = styled.div`
  margin: 0 auto;
  text-align: center;
`;

const PleaseSignIn = props => (
  <Query query={CURRENT_USER_QUERY}>
    {({ data, loading }) => {
      if (loading) return <p>Loading...</p>;
      if (!data.me) {
        return (
          <div>
            <Centered>
              <p>Please Sign In Before Continuing</p>
            </Centered>
            <SignIn />
          </div>
        );
      }
      return props.children;
    }}
  </Query>
);

export default PleaseSignIn;
