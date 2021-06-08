import styled from "styled-components";

export const ChartModalContainer = styled.main`
  display: none;
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  overflow: auto;
  width: 100%;
  height: 100%;

  background-color: var(--background-color);
  background-color: rgba(0, 0, 0, 0.4);

  &.show {
    display: block;
  }

  form {
    display: flex;
    flex-direction: column;
    background-color: var(--background-color);
    margin: 0 auto;
    margin-top: 100px;
    width: 80vw;

    .chart-header {
      flex: 1;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      padding: 1rem;

      border-bottom: 1px solid var(--main-color);
      margin-bottom: 1rem;

      h1 {
        color: var(--main-color);
        font-weight: bold;
      }

      .close {
        color: var(--main-text-color);
        font-size: 3rem;
        font-weight: bold;

        &:hover,
        &:focus {
          color: black;
          text-decoration: none;
          cursor: pointer;
        }
      }
    }
  }

  .pacients-data {
    margin: 1rem;
    padding: 1rem;
    border-radius: 8px;

    background-color: var(--main-color);
  }

  .appointments-container {
    margin-top: 1rem;
    padding: 1rem;
    border-top: 1px solid var(--main-color);

    h3 {
      font-weight: bold;
      color: var(--main-color);
      padding: 1rem;
    }

    button {
      color: var(--secondary-color);
      font-size: 1.2rem;
    }
  }
`;
