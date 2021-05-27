import styled from 'styled-components';

export const HomeContainer = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;

  margin: auto;

  width: 800px;
  max-width: 80%;
  height: 100vh;

  @media (max-width: 360px) {
   a {
      width: 100%;
    }
  }

  img {
    border-radius: 8px;
    width: 60%;
    margin-bottom: 3rem;

    align-self: flex-end;
  }

  a {
    color: var(--main-color);
    font-size: 2rem;
    font-weight: bold;

    height: 3.5rem;
    width: 43%;

    line-height: 3rem;
    text-align: center;
    text-decoration: none;

    background: transparent;
    border: 3px solid var(--main-color);
    border-radius: 8px;

    align-self: flex-start;

    cursor: pointer;

    transition: ease-in-out 0.5s;

    &:not(:last-child) {
      margin-right: 3rem;
    }

    &:hover {
      color: #fff;
      background-color: var(--main-color);
    }
  }
`;
