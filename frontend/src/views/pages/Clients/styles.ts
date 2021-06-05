import styled from "styled-components";

export const ClientsContainer = styled.div`
  main {
    display: flex;
    justify-content: center;
    margin-top: 100px;

    .register-button {
      margin: 1rem;
      padding: 1rem;
      width: 30vw;

      background-color: var(--main-color);
      border-radius: 8px;
      border: 0;
      box-shadow: 5px 6px 5px 0px rgba(0, 0, 0, 0.49);

      color: var(--background-color);
      font-size: 1.2rem;
      font-weight: bold;
      letter-spacing: 1px;

      &:hover {
        filter: brightness(1.2);
      }

      @media (max-width: 720px) {
        width: fit-content;
      }
    }
  }
`;
