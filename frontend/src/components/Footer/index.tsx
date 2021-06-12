import { FooterContainer } from "./styles";

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <p>Grilados © 2021</p>
      <div>
        Icons made by{" "}
        <a href="https://www.freepik.com" title="Freepik">
          Freepik
        </a>{" "}
        from{" "}
        <a href="https://www.flaticon.com/" title="Flaticon">
          www.flaticon.com
        </a>
      </div>

      <a href="https://storyset.com/business">
        Business illustrations by Storyset
      </a>
    </FooterContainer>
  );
};

export default Footer;
