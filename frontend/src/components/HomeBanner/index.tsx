import React from "react";
import { HomeBannerContainer } from "./styles";

// import { Container } from './styles';

const HomeBanner: React.FC = () => {
  return (
    <HomeBannerContainer id="home">
      <div className="intro-text">
        <h1>Vitality é a solução que sua clínica precisa!</h1>
        <p>
          Uma aplicação para controle de prontuários e agenda de atendimentos.
          Tenha as funcionalidades mais importantes reunidas em uma só
          ferramenta!
        </p>
        <a href="/register">Experimente!</a>
      </div>
      <div className="intro-img">
        <img src="./img/print_vit.png" alt="" />
      </div>
    </HomeBannerContainer>
  );
};

export default HomeBanner;
