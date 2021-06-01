import styled from 'styled-components';

export const ClientsContainer = styled.div`


main {
    display: flex;
    justify-content: center ;
    flex-grow: 2;
    margin-top: 100px;
    /* padding: 75px 1rem;
    margin-left: -300px; */

    .register-button {
      padding: 1rem;
      //border: 1px solid var(--main-color);
      border: 0;
      border-radius: 8px;
      background-color: var(--main-color);
      font-size: 1.2rem;
      font-weight: bold;
      letter-spacing: 1px;
      color: var(--background-color);

      &:hover {
        filter: brightness(1.2);
      }
    }
  }
`;
