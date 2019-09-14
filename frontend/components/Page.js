import React, { Component } from 'react';
import styled, { ThemeProvider, injectGlobal } from 'styled-components';
import Header from '../components/Header';
import Meta from '../components/Meta';
import MobileNav from './MobileNav';


const theme = {
  red: '#FF0000',
  blue: '#0f2c52',
  yellow: 'rgb(84,181,206)',
  black: '#393939',
  grey: '#3A3A3A',
  lightgrey: '#E1E1E1',
  offWhite: '#EDEDED',
  maxWidth: '1000px',
  bs: '0 12px 24px 0 rgba(0, 0, 0, 0.09)',
};

const StyledPage = styled.div`
  /*background: ${props => props.theme.blue};*/
  /* background: linear-gradient(
    rgba(15,44,82,0.9),
    rgba(15,44,82,0.9)
    ), url('static/classbg.jpeg');
  background-repeat: no-repeat;
  background-size: cover; */
  color: ${props => props.theme.black};
  background: url('static/pattern-light.svg');
  background-size: 700px;
  min-height: 100vh;
`;

const Inner = styled.div`
  max-width: ${props => props.theme.maxWidth};
  margin: 0 auto;
  padding: 2rem;
`;

injectGlobal`

    html {
        box-sizing: border-box;
        font-size: 10px;
        font-family: "Montserrat";
    }
    *, *:before, *:after {
        box-sizing: inherit;
    }

    body {
        padding: 0;
        margin: 0;
        font-size: 1.5rem;
        line-height: 2;
        font-family: 'Montserrat';
        width: 100%;
        min-height: 100vh;
        color: ${props => props.theme.black};
    }
    a {
        text-decoration: none;
        color: ${props => props.theme.black};
    }

    /*Below Styles for the burger menu*/
    /* Position and sizing of burger button */
    .bm-burger-button {
    position: fixed;
    width: 36px;
    height: 30px;
    left: 26px;
    top: 26px;
    }
    /* Color/shape of burger icon bars */
    .bm-burger-bars {
    background: #373a47;
    }
    /* Color/shape of burger icon bars on hover*/
    .bm-burger-bars-hover {
    background: #a90000;
    }
    /* Position and sizing of clickable cross button */
    .bm-cross-button {
    height: 24px;
    width: 24px;
    }
    /* Color/shape of close button cross */
    .bm-cross {
    background: #FFFAFA;
    }
    /*
    Sidebar wrapper styles
    Note: Beware of modifying this element as it can break the animations - you should not need to touch it in most cases
    */
    .bm-menu-wrap {
    position: fixed;
    height: 100%;
    }
    /* General sidebar styles */
    .bm-menu {
    background: #0f2c52;
    padding: 2.5em 1.5em 0;
    font-size: 1.15em;
    }
    /* Morph shape necessary with bubble or elastic */
    .bm-morph-shape {
    fill: #373a47;
    }
    /* Wrapper for item list */
    .bm-item-list {
    color: #fffafa;
    padding: 0.8em;
    display: flex;
    flex-direction: column;
      a {
        color: white;
      }
    }

    .bm-burger-button {
    left: initial;
    right: 36px;
}
`;

class Page extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
      <>
      <MobileNav right />
        <StyledPage id="page-wrap">
          <Meta />
          <Header />
          <Inner>{this.props.children}</Inner>
        </StyledPage>
        </>
      </ThemeProvider>
    );
  }
}

export default Page;
