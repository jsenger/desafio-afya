import styled from 'styled-components';

export const ModalContainer = styled.div`
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

  button {
    background-color: var(--main-button-color);
    border: 0;
    border-radius: 8px;
    color: var(--main-color);
    font-size: 1.2rem;
    font-weight: bold;
    letter-spacing: 1px;
    padding: 8px;

    transition: 0.5s linear;

    &:hover {
      background-color: var(--main-color);
      color: var(--main-button-color);
    }
  }

  .modal-content {

    background-color: var(--background-color);
    margin: 15% auto;
    padding: 20px;
    border: 1px solid var(--main-color);
    width: 80%;
    color: var(--main-color);

    .modal-header {
      display: flex;
      align-items: center;
      justify-content: space-between;

      .close {
        color: var(--main-text-color);
        float: right;
        font-size: 3rem;
        font-weight: bold;

        &:hover,
        &:focus {
          color: black;
          text-decoration: none;
          cursor: pointer;
        }
      }
    }

    label {
      font-weight: bold;
      letter-spacing: 0.5px;

    }
  }
`;
