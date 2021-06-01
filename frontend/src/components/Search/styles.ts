import styled from 'styled-components';

export const SearchField = styled.form`
  background-color: var(--main-color);
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  margin-top: 50px;

  width: fit-content;
  min-width: 300px;
  padding: 1rem;
  border-radius: 8px;

  label {
    color: var(--background-color);
    font-size: 1.2rem;
    letter-spacing: 1px;
    margin-right: 10px;
  }

  input[type="text"] {
    border: 0;
    border-radius: 4px;
    padding: 5px;

  }

  button {
    background-color: var(--main-button-color);
    border: 0;
    border-radius: 1.5rem;

    color: var(--main-color);
    font-weight: bold;
    letter-spacing: 1px;

    margin-left: -12px;
    padding: 8px;

    transition: ease-in-out 0.4s;

    &:hover {
      filter: brightness(1.5);
    }
  }

  @media (max-width: 500px) {
    button {
      margin-left: 5px;
    }
  }

  @media (max-width: 360px) {
    width: 80%;
    button {
      margin: 5px;
    }
  }
`