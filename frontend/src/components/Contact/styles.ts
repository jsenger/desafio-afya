import styled from "styled-components";

export const ContactContainer = styled.main`
  height: 100vh;

  background-color: #e9ecef;

  .contact-content {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;

    align-items: center;

    justify-content: space-around;
    width: 80vw;

    margin: 0 auto;
  }

  .contact-img {
    flex: 2;

    img {
      width: 600px;
    }
  }

  form {
    flex: 2;
    display: flex;
    flex-direction: column;
    height: 50vh;

    border-radius: 8px;

    padding: 1rem;

    box-shadow: 1px 2px 7px var(--main-text-color);

    h3 {
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
  }
`;
