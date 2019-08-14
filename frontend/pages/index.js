import styled from 'styled-components';
import Link from 'next/link';

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
    background: ${props => props.theme.yellow};
    color: ${props => props.theme.blue};
    padding: 1.5rem;
    border: none;
    outline: none;
    border-radius: 20px;
    margin-right: 2rem;
    font-size: 3rem;
    font-weight: 800;
    width: 300px;
    &:hover {
      color: ${props => props.theme.offWhite};
      cursor: pointer;
    }
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
        <button>Get Started</button>
      </Link>
    </HeroDiv>
  </div>
);

export default Home;
