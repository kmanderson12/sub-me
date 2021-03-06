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
  font-size: 1.5rem;
  color: #525252;
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
    color: #9c9c9c;
    outline: none;
    padding: 0.5rem;
    font-size: 1.5rem;
    font-family: 'Montserrat';
    border: none;
    border-radius: 0;
    border-bottom: 2px solid ${props => props.theme.yellow};
    /* border-radius: 6px; */
    &:focus {
      outline: 0;
      border-color: #f5deb3;
    }
  }
  button,
  input[type='submit'] {
    width: 100%;
    margin: 1rem 0;
    background: ${props => props.theme.yellow};
    color: white;
    border: 2px solid ${props => props.theme.blue};
    font-size: 2rem;
    font-weight: 600;
    border-radius: 8px;
    padding: 1rem 1.2rem;
  }
  fieldset {
    border: 0;
    padding: 2rem;
    width: 100%;
    &[disabled] {
      opacity: 0.5;
    }
    a {
      color: white;
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
