import styled from 'styled-components';
import Link from 'next/link';
import YellowButton from '../components/styles/YellowButton';

const HeroDiv = styled.div`
  display: flex;
  width: 100%;
  min-height: 400px;
  justify-content: flex-end;
  flex-direction: column;
  color: white;
  h1 {
    margin: 0;
  }
  p {
    margin: 0 0 1rem 0;
    font-weight: 300;
  }

  button {
    font-size: 3rem;
    font-weight: 800;
    max-width: 300px;
  }
`;

const Home = props => (
  <div>
    <HeroDiv>
      <h1>A better way to get a sub.</h1>
      <p>
        Connect pre-approved substitutes with unexpected openings.
        <br />
        Without the last-minute rush.
      </p>
      <Link href="/signup">
        <YellowButton>Get Started</YellowButton>
      </Link>
    </HeroDiv>
  </div>
);

export default Home;
