import styled from "styled-components";

export const HomeBannerContainer = styled.section`
  background-color: var(--main-color);

  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100vw;
  height: 100vh;
  justify-content: space-around;
  align-items: center;
  padding: 1rem;

  .intro-text {
    flex: 2;
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

    button {
      background-color: var(--background-color);
      border: 0;
      border-radius: 8px;
      color: var(--main-color);
      font-size: 1rem;
      font-weight: 600;
      width: 10rem;
      height: 2rem;
    }
  }

  .intro-img {
    flex: 1;
    margin: 2rem;
    img {
      width: 50vw;
      border-radius: 8px;
      box-shadow: 1px 2px 4px #000;
    }
  }
`;
