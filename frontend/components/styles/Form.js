import styled, { keyframes } from 'styled-components';

const loading = keyframes`
  from {
    background-position: 0 0;
    /* rotate: 0; */
  }

  to {
    background-position: 100% 100%;
    /* rotate: 360deg; */
  }
`;

const Form = styled.form`
  box-shadow: 0 0 5px 3px rgba(0, 0, 0, 0.05);
  background: rgba(0, 0, 0, 0.02);
  padding: 20px;
  font-size: 1.5rem;
  line-height: 1.5;
  font-weight: 600;
  legend {
    font-size: 2.5rem;
  }
  label {
    display: block;
    margin-bottom: 1rem;
    font-size: 2rem;
  }
  input,
  textarea,
  select {
    width: 100%;
    background: none;
    color: white;
    outline: none;
    padding: 0.5rem;
    font-size: 1.5rem;
    font-family: 'Montserrat';
    border-bottom: 2px solid white;
    border-radius: 6px;
    &:focus {
      outline: 0;
      border-color: ${props => props.theme.yellow};
    }
  }
  button,
  input[type='submit'] {
    width: auto;
    background: ${props => props.theme.yellow};
    color: white;
    border: 0;
    font-size: 2rem;
    font-weight: 600;
    border-radius: 8px;
    padding: 0.5rem 1.2rem;
  }
  fieldset {
    border: 2px solid white;
    padding: 2rem;
    border-radius: 14px;

    &[disabled] {
      opacity: 0.5;
    }
  }
`;

export default Form;
