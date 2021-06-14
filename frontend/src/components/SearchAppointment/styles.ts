import styled from "styled-components";

export const SearchContainer = styled.form`
  background-color: var(--secondary-bg-color);
  padding: 1rem;
  border-radius: 8px;
  margin: 0 auto;
  margin-top: 100px;
  width: 80vw;

  button {
    background-color: var(--main-button-color);
    border: 0;
    color: var(--main-color);
    font-weight: 500;
    letter-spacing: 1px;

    width: 100%;

    display: flex;
    justify-content: center;
    gap: 2rem;
    align-items: center;

    &:focus {
      background-color: var(--secondary-bg-color);
      color: var(--main-text-color);
    }

    &:hover {
      background-color: var(--secondary-bg-color);
      color: var(--main-text-color);
    }

    svg {
      font-size: 1.2rem;
    }
  }

  label {
    font-weight: 500;
  }

  .search-btn {
    background-color: var(--main-color);
    color: var(--background-color);
    font-weight: 500;
    letter-spacing: 1px;
    width: 50vw;
    height: 2rem;
    border-radius: 8px;
    transition: ease-in-out 0.3s;

    &:hover {
      background-color: var(--main-button-color);
      color: var(--main-color);
    }
  }
`;
