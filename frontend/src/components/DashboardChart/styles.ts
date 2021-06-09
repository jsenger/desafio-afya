import styled from "styled-components";

export const DashboardChartContainer = styled.main`
  .chart-container {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-around;

    width: 90vw;
    margin: 0 auto;

    background-color: #e9ecef;
    border-radius: 8px;
    padding: 1rem;

    .pacients {
      color: var(--main-text-color);
      display: flex;
      flex-direction: column;
      justify-content: center;

      h1 {
        font-size: 3rem;
        font-weight: 500;
        margin: 0 auto;
      }

      p {
        font-weight: 500;
      }
    }

    .confirmed {
      color: var(--main-color);
      display: flex;
      flex-direction: column;
      justify-content: center;

      h1 {
        font-size: 3rem;
        font-weight: 500;
        margin: 0 auto;
      }

      p {
        font-weight: 500;
      }
    }

    .accomplished {
      color: #43aa8b;
      display: flex;
      flex-direction: column;
      justify-content: center;

      h1 {
        font-size: 3rem;
        font-weight: 500;
        margin: 0 auto;
      }

      p {
        font-weight: 500;
      }
    }

    .canceled {
      color: var(--danger-color);
      display: flex;
      flex-direction: column;
      justify-content: center;

      h1 {
        font-size: 3rem;
        font-weight: 500;
        margin: 0 auto;
      }

      p {
        font-weight: 500;
      }
    }
  }
`;
