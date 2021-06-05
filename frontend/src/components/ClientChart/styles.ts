import styled from 'styled-components';

export const ChartContainer = styled.main`
  margin-top: 100px;


  display: flex;
  flex-direction: column;
  gap: 1rem;

  height: calc(100vh - 190px);
  overflow: auto;

.chart-container {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 70vw;
    align-items: center;
    justify-content: space-between;
    margin: 0 auto;
    margin-top: 1.5rem;
    padding: 1rem;

    border: 1px solid var(--main-text-color);
    border-radius: 8px;

  .chart-content {
    flex: 2;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 1rem;
    padding: 10px;

    h1 {
      font-size: 2rem;

    }

    h2 {
      font-size: 1rem;
    }
    @media (max-width: 720px) {
        h1 {
          width: 50vw;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
      }
  }

  .chart-buttons {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    justify-content: center;

    button:last-of-type{
      background-color: var(--main-color);
      color: var(--main-button-color);

    }

    button {
      border: 0;
      border-radius: 8px;
      background-color: var(--main-button-color);
      color: var(--main-color);
      font-weight: bold;
      letter-spacing: 1px;

      padding: 1rem;
    }

    @media (max-width: 720px) {
      justify-content: space-evenly;
      gap: 1rem;
    }
  }
}


`