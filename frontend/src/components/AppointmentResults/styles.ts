import styled from "styled-components";

export const ResultsTable = styled.table`
  margin: 0 auto;
  margin-top: 50px;
  max-height: 50vh;
  overflow: auto;
  width: 70vw;

  border-radius: 8px;

  ::-webkit-scrollbar {
    width: 10px;
  }

  ::-webkit-scrollbar-track {
    background: #f1f1f1;
  }

  ::-webkit-scrollbar-thumb {
    background: #888;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: #555;
  }

  table {
    margin: 0 auto;
    height: auto;

    thead {
      border-radius: 8px;
      background-color: var(--main-color);
      color: var(--background-color);
      letter-spacing: 1px;
    }

    tbody tr {
      cursor: pointer;
    }
  }
`;
