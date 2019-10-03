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
                  <ClearButton onClick={toggle}>Log In</ClearButton>
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
                  <YellowButton onClick={toggle}>Sign Up</YellowButton>
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
