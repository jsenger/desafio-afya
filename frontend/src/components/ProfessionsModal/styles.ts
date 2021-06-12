import styled from "styled-components";

export const ProfessionsModalContainer = styled.div`
  display: none;
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  overflow: auto;
  width: 100%;
  height: 100%;

  background-color: var(--main-text-color);
  background-color: rgba(0, 0, 0, 0.4);

  &.show {
    display: block;
  }

  button {
    background-color: var(--main-button-color);
    border: 0;
    border-radius: 8px;
    color: var(--main-color);
    font-size: 1rem;
    font-weight: bold;
    letter-spacing: 1px;
    width: 100%;
    padding: 10px;

    transition: 0.2s ease-in-out;

    &:hover {
      box-shadow: 5px 6px 5px 0px rgba(0, 0, 0, 0.49);
    }
  }

  .modal-content {
    background-color: var(--background-color);
    color: var(--main-color);
    margin: 15% auto;
    padding: 20px;
    border: 0;
    box-shadow: 5px 6px 5px 0px rgba(0, 0, 0, 0.49);
    width: 50%;

    .modal-header {
      display: flex;
      align-items: center;
      justify-content: space-between;

      border-bottom: 1px solid var(--main-button-color);

      h4 {
        font-weight: 700;
        letter-spacing: 1px;
      }

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
      font-weight: 600;
      letter-spacing: 0.5px;
    }
    input {
      background-color: #d3d3d3;
    }
  }
`;
