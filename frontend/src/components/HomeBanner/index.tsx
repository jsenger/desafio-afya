import React from "react";
import { Carousel } from "react-bootstrap";
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
      <div className="intro-carousel">
        <Carousel fade>
          <Carousel.Item interval={500}>
            <img className="d-block w-100" src="./img/print_vit.png" alt="" />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="./img/print_vit.png"
              alt="Second slide"
            />
          </Carousel.Item>
          <Carousel.Item interval={500}>
            <img
              className="d-block w-100"
              src="./img/print_vit3.png"
              alt="Third slide"
            />
          </Carousel.Item>
          <Carousel.Item interval={500}>
            <img
              className="d-block w-100"
              src="./img/print_vit4.png"
              alt="Third slide"
            />
          </Carousel.Item>
        </Carousel>
      </div>
    </HomeBannerContainer>
  );
};

export default HomeBanner;
