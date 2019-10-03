import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';

const HeroDiv = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-start;
  color: white;
`;

class HeroComp extends Component {
  render() {
    return (
      <HeroDiv>
        <h1>A better way to get a sub.</h1>
        <p>
          Connect pre-approved substitutes with unexpected openings.
          <br />
          Without the last-minute rush.
        </p>
      </HeroDiv>
    );
  }
}

export default HeroComp;
