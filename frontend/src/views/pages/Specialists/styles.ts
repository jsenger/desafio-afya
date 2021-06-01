import styled from 'styled-components';

export const SpecialistsContainer = styled.div`


main {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center ;
    gap: 2rem;
    flex-grow: 2;
    margin-top: 100px;
    /* padding: 75px 1rem;
    margin-left: -300px; */

    .register-button {
      padding: 1rem;
      border: 0;
      border-radius: 8px;
      background-color: var(--main-button-color);
      box-shadow: 5px 6px 5px 0px rgba(0,0,0,0.49);
      font-size: 1.2rem;
      font-weight: bold;
      letter-spacing: 1px;
      color: var(--main-color);

      flex: 1;
      margin-left: 2rem;

      &:hover {
        filter: brightness(1.2);
      }
    }
    .special-button {
      padding: 1rem;
      border: 0;
      border-radius: 8px;
      background-color: var(--main-color);
      box-shadow: 5px 6px 5px 0px rgba(0,0,0,0.49);
      font-size: 1.2rem;
      font-weight: bold;
      letter-spacing: 1px;

      //margin-left: 2rem;
      color: var(--background-color);

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
