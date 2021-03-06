import React, { Component } from 'react';
import styled, { ThemeProvider, injectGlobal } from 'styled-components';
import Header from '../components/Header';
import Meta from '../components/Meta';
import Nav from './Nav';

const theme = {
  red: '#FF0000',
  blue: '#0f2c52',
  yellow: '#54b5ce',
  black: '#393939',
  grey: '#3A3A3A',
  lightgrey: '#E1E1E1',
  offWhite: '#EDEDED',
  maxWidth: '1000px',
  bs: '0 12px 24px 0 rgba(0, 0, 0, 0.09)',
};

const StyledPage = styled.div`
  color: ${props => props.theme.black};
  background: linear-gradient(#54b5cead, #f5deb3),
    url('static/pattern-light.svg');
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
        background: #f5deb3;
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
`;

class Page extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <>
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
