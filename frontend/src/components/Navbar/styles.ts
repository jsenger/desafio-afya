import styled from "styled-components";

export const Navigation = styled.nav`
  background-color: var(--main-color);
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;

  .nav-links-container {
    .nav-links {
      margin: 1rem;

      .active {
        color: var(--main-button-color);
      }
      a {
        color: var(--background-color);
        font-weight: 500;
        letter-spacing: 1px;

        &:hover {
          color: var(--main-button-color);
        }
      }
    }
  }
  .navbar-toggler {
    background-color: var(--background-color);
  }
  .nav-btns {
    background-color: var(--background-color);
    border: 0;
    color: var(--main-color);
    font-weight: 600;
    margin: 1rem;
    width: 12.5rem;

    &:hover {
      background-color: var(--main-button-color);
      color: var(--main-color);
    }
  }
`;
