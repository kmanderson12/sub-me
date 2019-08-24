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
  width: 100%;
  max-width: 600px;
  display: flex;
  justify-content: center;
  margin: 0 auto;
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
    background: white;
    color: ${props => props.theme.black};
    outline: none;
    padding: 0.5rem;
    font-size: 1.5rem;
    font-family: 'Montserrat';
    border: 2px solid white;
    border-radius: 6px;
    &:focus {
      outline: 0;
      border-color: ${props => props.theme.yellow};
    }
  }
  button,
  input[type='submit'] {
    width: 100%;
    margin: 1rem 0;
    background: ${props => props.theme.yellow};
    color: white;
    border: 0;
    font-size: 2rem;
    font-weight: 600;
    border-radius: 8px;
    padding: 1rem 1.2rem;
  }
  fieldset {
    border: 2px solid white;
    padding: 2rem;
    border-radius: 14px;
    width: 100%;
    &[disabled] {
      opacity: 0.5;
    }
    a {
      display: block;
      text-align: right;
      font-weight: 300;
      margin-top: 1rem;
      &:hover {
        color: ${props => props.theme.yellow};
      }
    }
  }
`;

export default Form;
