import styled from 'styled-components';

const YellowButton = styled.button`
  background: ${props => props.theme.yellow};
  color: ${props => props.theme.blue};
  padding: 1.5rem;
  border: none;
  outline: none;
  border-radius: 20px;
  margin-right: 2rem;
  font-size: 1.5rem;
  font-weight: 800;
  &:hover {
    color: ${props => props.theme.offWhite};
    cursor: pointer;
  }
`;

export default YellowButton;