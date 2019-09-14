import Link from 'next/link';
import styled from 'styled-components';
import Router from 'next/router';
import NProgress from 'nprogress';
import Nav from './Nav';
import MobileNav from './MobileNav';

Router.onRouteChangeStart = () => {
  NProgress.start();
};
Router.onRouteChangeComplete = () => {
  NProgress.done();
};

Router.onRouteChangeError = () => {
  NProgress.done();
};

const Logo = styled.h1`
  font-size: 4rem;
  margin: 0 0 0 2rem;
  position: relative;
  z-index: 2;
  a {
    padding: 0.5rem 3rem;
    color: ${props => props.theme.yellow};
    text-decoration: none;
    /*text-shadow: 2px 2px 2px rgba(15, 44, 82, 0.7);*/
    text-shadow: -1px -1px 0 #0f2c52, 1px -1px 0 #0f2c52, -1px 1px 0 #0f2c52,
      1px 1px 0 #0f2c52;
  }
  @media (max-width: 1300px) {
    margin: 0;
    text-align: center;
  }
`;

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  /*background: linear-gradient(
    rgba(255, 255, 255, 0.7),
    rgba(255, 255, 255, 0.2)
  );*/
  img {
    height: 40px;
    &:hover {
      cursor: pointer;
    }
  }
`;

const Header = () => (
  <StyledHeader>
    <Logo>
      <Link href="/">
        <a>SubMe</a>
      </Link>
    </Logo>
  </StyledHeader>
);

export default Header;
