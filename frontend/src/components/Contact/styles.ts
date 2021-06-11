import styled from "styled-components";

export const ContactContainer = styled.section`
  background-color: var(--main-button-color);

  align-items: center;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  height: fit-content;
  padding: 2rem;
  margin: 0 auto;

  .contact-img {
    flex: 1;
    min-width: 400px;
    margin-top: 5rem;
  }

  form {
    flex: 1;
    display: flex;
    flex-direction: column;
    height: auto;

    border-radius: 8px;

    padding: 2rem;

    box-shadow: 1px 2px 7px var(--main-text-color);

    background-color: var(--background-color);

    h3 {
      border-bottom: 1px solid var(--main-button-color);
      padding-bottom: 1rem;
      color: var(--main-color);
      font-weight: 600;
      letter-spacing: 1px;
      margin-bottom: 1rem;
    }

    label {
      color: var(--main-color);
      font-weight: 600;
      letter-spacing: 1px;
    }

    input {
      border: 0;
      border-radius: 4px;
      height: 2.5rem;
      margin-bottom: 1rem;
    }
    textarea {
      border: 0;
      border-radius: 4px;

      height: 40%;
    }

    button {
      margin-top: 1rem;

      background-color: var(--main-button-color);
      border: 0;
      border-radius: 8px;
      color: var(--main-color);
      font-size: 1.3rem;
      font-weight: 600;
      letter-spacing: 1px;
      padding: 10px;
    }
  }

  @media (max-width: 720px) {
    .contact-content {
      height: auto;
      padding: 1rem;
      align-items: stretch;
    }
    .contact-img {
      display: none;
    }

    form {
      width: 80vw;
    }
  }
`;
