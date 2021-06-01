import styled from 'styled-components';

export const ClientsContainer = styled.div`


main {
    display: flex;
    justify-content: center ;
    margin-top: 100px;

    .register-button {
     width: 30vw;
      margin: 1rem;
      padding: 1rem;
      //border: 1px solid var(--main-color);
      border: 0;
      border-radius: 8px;
      background-color: var(--main-color);
      box-shadow: 5px 6px 5px 0px rgba(0,0,0,0.49);
      font-size: 1.2rem;
      font-weight: bold;
      letter-spacing: 1px;
      color: var(--background-color);

      &:hover {
        filter: brightness(1.2);
      }

      @media (max-width: 720px) {
        width: fit-content;
      }
    }
  }
`;
