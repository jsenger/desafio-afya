import styled from "styled-components";

export const AboutContainer = styled.section`
  background-color: var(--main-color);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;
  height: 100vh;

  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 1rem;

    img {
      width: 250px;
      border-radius: 50%;
    }

    h4 {
      color: var(--background-color);
      letter-spacing: 1px;
      margin: 1rem;
    }

    a {
      color: var(--secondary-color);
      font-size: 1rem;
      font-weight: 600;
    }
  }

  @media (max-width: 720px) {
    height: auto;
  }
`;
