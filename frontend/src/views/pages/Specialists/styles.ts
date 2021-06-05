import styled from "styled-components";

export const SpecialistsContainer = styled.div`
  main {
    display: flex;
    flex-direction: row;
    flex-grow: 2;
    flex-wrap: wrap;
    gap: 2rem;
    justify-content: center;
    margin: 0 auto;
    margin-top: 100px;

    width: 70vw;;

    .register-button {
      background-color: var(--main-button-color);
      border-radius: 8px;
      border: 0;
      box-shadow: 5px 6px 5px 0px rgba(0, 0, 0, 0.49);
      padding: 1rem;

      color: var(--main-color);
      font-size: 1.2rem;
      font-weight: bold;
      letter-spacing: 1px;

      flex: 1;
      margin-left: 2rem;

      &:hover {
        filter: brightness(1.2);
      }
    }
    .special-button {
      background-color: var(--main-color);
      border-radius: 8px;
      border: 0;
      box-shadow: 5px 6px 5px 0px rgba(0, 0, 0, 0.49);
      padding: 1rem;

      color: var(--background-color);
      font-size: 1.2rem;
      font-weight: bold;
      letter-spacing: 1px;

      flex: 1;
      margin-right: 2rem;

      &:hover {
        filter: brightness(1.2);
      }
    }

    @media (max-width: 720px) {
      .special-button {
        margin: 0 auto;
      }

      .register-button {
        margin: 0 auto;
      }
    }
  }
`;
