import styled from 'styled-components';

export const DashboardContainer = styled.main`

 h1 {
   margin-top: 100px;
   margin-right: 50px;
   margin-bottom: 1rem;
   text-align: right;
   font-weight: lighter;
   padding: 1rem;

 }

.content {
  display: flex;
  align-items: center;
  justify-content: center;
  height: auto;
  width: 90vw;
  gap: 2rem 2rem;
  flex-direction: row;
  flex-wrap: wrap;
  margin: 0 auto;

  img {
    flex: 2;
   // width: 40%;
    min-width: 300px;
  }

  p {
    flex: 2;

    min-width: 300px;
    text-align: justify;
  }
}

@media (max-width: 720px) {
  .content {
    width: 90%;
    margin: 0 auto;

    img {
      width: 100%;
    }
    p {
      width: 100%;
    }
  }
}
`