import Link from 'next/link';
import styled from 'styled-components';
import MobileNavStyles from './styles/MobileNavStyles';
import YellowButton from './styles/YellowButton';
import User from './User';
import Signout from './Signout';
import { Mutation } from 'react-apollo';

const MobileNav = () => (
  <User>
    {({ data: { me } }) => (
      <MobileNavStyles data-test="nav">
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/about">
          <a>About</a>
        </Link>
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
            <Link href="/signin">
              <a>Log In</a>
            </Link>
            <Link href="/signup">
              <YellowButton>Sign Up</YellowButton>
            </Link>
          </>
        )}
      </MobileNavStyles>
    )}
  </User>
);

export default MobileNav;
