import styled from 'styled-components';

const YellowButton = styled.button`
  background: ${props => props.theme.yellow};
  color: ${props => props.theme.blue};
  padding: 1.5rem;
  border: 1px solid #0f2c52;
  border-bottom: 2px solid #0f2c52;
  box-shadow: 2px 2px #0f2c52;
  outline: none;
  border-radius: 8px;
  /* transition: border-bottom 200ms; */
  font-weight: 800;
  &:hover {
    cursor: pointer;
  }
`;

export default YellowButton;
