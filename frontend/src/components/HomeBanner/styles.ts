import styled from "styled-components";

export const HomeBannerContainer = styled.section`
  background-color: var(--main-color);

  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  height: 100vh;
  justify-content: center;
  align-items: center;
  padding: 1rem;

  .intro-text {
    flex: 2;
    width: 40vw;
    margin: 2rem;
    color: var(--background-color);

    h1 {
      font-weight: 700;
    }

    p {
      margin-top: 1rem;
      font-size: 1.2rem;
      font-weight: 500;
    }

    a {
      background-color: var(--background-color);
      border: 0;
      border-radius: 8px;
      color: var(--main-color);
      font-size: 1rem;
      font-weight: 600;
      padding: 10px;
    }
  }

  .intro-img {
    flex: 1;
    margin: 2rem;
    img {
      width: 60vw;
      border-radius: 8px;
      box-shadow: 1px 2px 4px #000;
    }
  }

  @media (min-width: 720px) and (max-width: 900px) {
    margin-top: 100px;
    height: auto;

    flex-direction: column;
    justify-content: center;
    .intro-text {
      margin: 0 auto;
      width: 80vw;
    }
    .intro-img {
      margin: 0 auto;

      img {
        margin-top: 1rem;
        width: 80vw;
      }
    }
  }

  @media (max-width: 720px) {
    margin-top: 100px;
    height: auto;

    .intro-img {
      display: none;
    }
  }
`;
