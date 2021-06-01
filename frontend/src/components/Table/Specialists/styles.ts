import styled from 'styled-components';

export const TableContainer = styled.main`
  margin: 0 auto;
  height: 50vh;
  overflow: auto;

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
  height: 300px;

  thead {
    border-radius: 8px;
    background-color: var(--main-color);
    color: var(--background-color);
    letter-spacing: 1px;

  }

}
`