import styled from 'styled-components';
import Link from 'next/link';
import YellowButton from '../components/styles/YellowButton';

const HeroDiv = styled.div`
  display: flex;
  max-width: 550px;
  min-height: 400px;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  color: ${props => props.theme.blue};
  h1 {
    margin: 0 0 1rem 0;
    line-height: 1.25;
    letter-spacing: 1.25px;
    font-size: 4.5rem;
    @media (max-width: 700px) {
      font-size: 3.5rem;
    }
  }
  p {
    margin: 0 0 1rem 0;
    font-weight: 400;
    font-size: 2rem;
    line-height: 1.5;
    opacity: 0.7;
    max-width: 500px;
    @media (max-width: 700px) {
      font-size: 1.5rem;
      max-width: 275px;
    }
    /* display: none; */
  }

  button {
    font-size: 3rem;
    font-weight: 800;
    font-size: 2rem;
    width: 70%;
    text-transform: uppercase;
    margin: 0 auto;
    letter-spacing: 3px;
    min-width: 275px;
  }
`;

const Hero = props => (
  <>
    <HeroDiv>
      <h1>
        A better way
        <br />
        to get a sub.
      </h1>
      <p>
        Connect pre-approved substitutes with unexpected openings.
        <br />
        Without the last-minute rush.
      </p>
      <Link href="/signup">
        <YellowButton>Get Started</YellowButton>
      </Link>
    </HeroDiv>
  </>
);

export default Hero;
