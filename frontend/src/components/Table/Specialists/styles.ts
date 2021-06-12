import styled from "styled-components";

export const TableContainer = styled.div`
  margin: 0 auto;
  margin-top: 50px;
  height: 50vh;
  width: 90%;

  border-radius: 8px;
  overflow: auto;

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
    height: auto;
    margin: 0 auto;

    thead {
      background-color: var(--main-color);
      border-radius: 8px;
      color: var(--background-color);
      letter-spacing: 1px;
    }

    tbody tr {
      cursor: pointer;
    }
  }
`;
