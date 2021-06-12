import styled from "styled-components";

export const SearchField = styled.form`
  align-items: center;
  background-color: var(--main-color);
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0 auto;
  margin-top: 50px;

  border-radius: 8px;
  min-width: 300px;
  padding: 1rem;
  width: 85vw;

  label {
    color: var(--background-color);
    font-size: 1.2rem;
    font-weight: 500;
    letter-spacing: 1px;
    //margin-right: 1px;
    flex: 1;
  }

  input[type="text"] {
    border: 0;
    border-radius: 4px;
    padding: 8px;
    flex: 2;
  }

  button {
    background-color: var(--main-button-color);
    border: 0;
    border-radius: 1.5rem;

    color: var(--main-color);
    font-size: 1rem;
    font-weight: 700;
    letter-spacing: 1px;

    margin-left: -12px;

    transition: ease-in-out 0.4s;
    padding: 10px;
    flex: 1;

    &:hover {
      filter: brightness(1.5);
    }
  }

  @media (max-width: 360px) {
    width: 80%;
    button {
      margin-top: 10px;
      margin-left: 0;

      flex: 1;
    }

    input {
      flex: 1;
    }
  }

  @media (min-width: 360px) and (max-width: 720px) {
    width: 80%;
    button {
      margin: 10px;

      flex: 1;
    }

    input {
      flex: 1;
    }
  }
`;
