import Link from 'next/link';
import styled from 'styled-components';
import NavStyles from './styles/NavStyles';
import YellowButton from './styles/YellowButton';
import ClearButton from './styles/ClearButton';
import Toggle from '../lib/Toggle';
import Signin from './Signin';
import Signup from './Signup';
import Modal from './Modal';
import User from './User';
import Signout from './Signout';
import { Mutation } from 'react-apollo';

const HeaderSignUp = styled(YellowButton)`
  margin-right: 2rem;
  font-size: 1.2rem;
  padding: 0.5em 1em;
  border-radius: 4px;
  &:hover {
    /* color: ${props => props.theme.offWhite}; */
    border-bottom: 1px solid #0f2c52;
  }
`;

const HeaderLogIn = styled(ClearButton)`
  margin-right: 2rem;
  font-size: 1.2rem;
  padding: 0.5em 0.75em;
`;

const Nav = () => (
  <User>
    {({ data: { me } }) => (
      <NavStyles data-test="nav">
        {me && (
          <>
            <Link href="/account">
              <a>Account</a>
            </Link>
            <Signout />
          </>
        )}
        {!me && (
          <>
            <Toggle>
              {({ on, toggle }) => (
                <>
                  <HeaderLogIn onClick={toggle}>Log In</HeaderLogIn>
                  {on && (
                    <Modal on={on} toggle={toggle} bgToggle={true}>
                      <Signin />
                    </Modal>
                  )}
                </>
              )}
            </Toggle>
            <Toggle>
              {({ on, toggle }) => (
                <>
                  <HeaderSignUp onClick={toggle}>Sign Up</HeaderSignUp>
                  {on && (
                    <Modal on={on} toggle={toggle} bgToggle={false}>
                      <Signup />
                    </Modal>
                  )}
                </>
              )}
            </Toggle>
          </>
        )}
      </NavStyles>
    )}
  </User>
);

export default Nav;
