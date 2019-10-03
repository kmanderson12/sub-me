import styled from 'styled-components';

const ClearButton = styled.button`
  background: transparent;
  color: ${props => props.theme.blue};
  padding: 1.5rem;
  border: 0;
  outline: none;
  margin-right: 2rem;
  font-size: 1.5rem;
  font-weight: 400;
  &:hover {
    cursor: pointer;
  }
`;

export default ClearButton;
