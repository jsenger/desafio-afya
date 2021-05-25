import styled from 'styled-components';

export const LoginContainer = styled.main`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;

  width: 1000px;
  max-width: 80%;
  height: 100vh;

  margin: auto;

  div {
    width: 40%;

    img {
      object-fit: cover;
      width: 150%;
    }
  }

  form {
    display: flex;
    flex-wrap: wrap;

    background: #f70054;
    color: #fff;

    border-radius: 8px;

    width: 40%;
    padding: 1rem;

    h1 {
      width: 100%;
      padding-bottom: 0.2rem;
      margin-bottom: 1.5rem;

      border-bottom: 1px solid;
    }

    label {
      width: 100%;
      margin-bottom: 0.5rem;
    }

    input {
      width: 100%;
      background: #fff;
      border: none;
      border-radius: 8px;
      padding: 10px;

      &:not(:last-child) {
        margin-bottom: 1rem;
      }
    }

    button {
      width: 100%;
      height: 4rem;
      margin-top: 1rem;

      background: #2f2e41;
      color: #fff;

      font-size: 2rem;
      font-weight: bold;

      border: none;
      border-radius: 8px;

      cursor: pointer;

      transition: all 0.5s;

      &:hover {
        background: #fff;
        color: #2f2e41;
      }
    }

    p {
      margin: 1rem auto 0;

      a {
        color: #fff;
      }
    }
  }
`;
