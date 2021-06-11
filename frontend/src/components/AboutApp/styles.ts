import styled from "styled-components";

export const AboutAppContainer = styled.main`
  background-color: var(--background-color);
  width: 100vw;
  height: calc(100vh - 118px);

  h2 {
    color: (--main-text-color);
    font-weight: 700;
    text-align: center;
    padding: 2rem;
    height: 10vh;
    margin-bottom: 1rem;
  }

  .how-it-works {
    color: (--main-text-color);
    font-size: 1rem;
    text-align: center;
    padding: 2rem;
    height: 10vh;
    margin-bottom: 5rem;
  }

  .content-container {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;

    width: 90vw;
    justify-content: space-between;
    align-items: center;
    gap: 3rem;

    margin: 0 auto;

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
`;
