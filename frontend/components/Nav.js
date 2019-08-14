import Link from 'next/link';
import styled from 'styled-components';
import NavStyles from './styles/NavStyles';
import User from './User';
import Signout from './Signout';
import { Mutation } from 'react-apollo';

const SignUpButton = styled.button`
  background: ${props => props.theme.yellow};
  color: ${props => props.theme.blue};
  padding: 1.5rem;
  border: none;
  outline: none;
  border-radius: 20px;
  margin-right: 2rem;
  font-size: 1.5rem;
  font-weight: 800;
  &:hover {
    color: ${props => props.theme.offWhite};
    cursor: pointer;
  }
`;

const Nav = () => (
  <User>
    {({ data: { me } }) => (
      <NavStyles data-test="nav">
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/about">
          <a>About</a>
        </Link>
        {me && (
          <>
            <Link href="/me">
              <a>Account</a>
            </Link>
            <Signout />
          </>
        )}
        {!me && (
          <Link href="/login">
            <a>Log In</a>
          </Link>
        )}
        <Link href="/signup">
          <SignUpButton>Sign Up</SignUpButton>
        </Link>
      </NavStyles>
    )}
  </User>
);

export default Nav;
