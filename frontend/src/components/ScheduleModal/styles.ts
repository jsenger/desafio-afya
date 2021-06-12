import styled from "styled-components";

export const ScheduleContainer = styled.main`
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

  .form-group {
    display: flex;
    flex-wrap: wrap;
    align-items: flex-end;

    .select {
      width: 100%;
    }
  }

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
    padding: 1rem;

    transition: 0.2s ease-in-out;

    &:hover {
      box-shadow: 5px 6px 5px 0px rgba(0, 0, 0, 0.49);
    }
  }

  .modal-content {
    background-color: var(--secondary-bg-color);
    color: var(--main-color);
    margin: 15% auto;
    padding: 1rem;
    border: 0;
    box-shadow: 5px 6px 5px 0px rgba(0, 0, 0, 0.49);
    width: 50vw;

    label {
      font-weight: 500;
    }

    .modal-header {
      display: flex;
      align-items: center;
      justify-content: space-between;

      h4 {
        font-weight: 600;
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
  }
`;
