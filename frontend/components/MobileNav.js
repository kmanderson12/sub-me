import Link from 'next/link';
import styled from 'styled-components';
import {slide as Menu} from 'react-burger-menu';
import MobileNavStyles from './styles/MobileNavStyles';
import YellowButton from './styles/YellowButton';
import User from './User';
import Signout from './Signout';
import { Mutation } from 'react-apollo';

const MobileNav = () => (
  <User>
    {({ data: { me } }) => (
      <Menu right >
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
      </Menu>
    )}
  </User>
);

export default MobileNav;
