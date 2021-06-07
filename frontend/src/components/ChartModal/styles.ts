import styled from "styled-components";

export const ChartModalContainer = styled.main`
  display: none;
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  overflow: auto;
  width: 100%;
  height: 100%;

  background-color: var(--background-color);
  background-color: rgba(0, 0, 0, 0.4);

  &.show {
    display: block;
  }

  form {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    background-color: var(--background-color);
    margin: 0 auto;
    margin-top: 100px;
    width: 80vw;
  }
  .list {
    background-color: transparent;
  }
`;
