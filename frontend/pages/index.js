import styled from 'styled-components';
import Link from 'next/link';

const HeroDiv = styled.div`
  display: flex;
  width: 100%;
  min-height: 400px;
  justify-content: flex-end;
  flex-direction: column;
  color: ${props => props.theme.blue};
  background: linear-gradient(
    29deg,
    rgba(255, 255, 255, 0.5) 0%,
    rgba(255, 255, 255, 0.4) -6%,
    rgba(255, 255, 255, 0) 100%
  );
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
    border: 1px solid #0f2c52;
    outline: none;
    border-radius: 39px;
    /*box-shadow: 2px 2px 1px rgba(15, 44, 82, 0.4);*/
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
