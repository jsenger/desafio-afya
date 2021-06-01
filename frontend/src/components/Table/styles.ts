import styled from 'styled-components';

export const TableContainer = styled.main`
  margin: 0 auto;
  width: 80%;
  height: 50vh;
  overflow-y: auto;
  overflow-x: auto;

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

    /* button {
    padding: 6px;
    font-size: 10px;
    border-radius: 8px;


  } */

}
`