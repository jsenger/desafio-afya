import styled from "styled-components";

export const AboutAppContainer = styled.main`
  background-color: var(--background-color);

  .content-container {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;

    width: 90vw;
    justify-content: space-between;
    align-items: stretch;
    gap: 3rem;

    margin: 0 auto;

    height: 100vh;

    padding: 4rem 1rem;

    div {
      display: flex;
      flex-direction: column;
      justify-content: center;
      flex: 1;

      img {
        margin: 0 auto;
      }
      h4 {
        font-weight: 600;
        margin-top: 1rem;
        text-align: center;
      }
      p {
        margin-top: 1rem;
        text-align: center;
        margin-bottom: 1rem;
      }
    }
  }

  @media (max-width: 720px) {
    height: auto;

    .content-container {
      height: fit-content;
    }
  }
`;
