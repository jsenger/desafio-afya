import { AiOutlineGithub, AiFillLinkedin } from "react-icons/ai";
import { AboutContainer } from "./styles";

const AboutUs: React.FC = () => {
  return (
    <AboutContainer id="about">
      <div>
        <img src="./img/jessica.jpeg" alt="Jéssica" />
        <h4>Jéssica Senger</h4>
        <a href="https://github.com/jsenger" target="_blank">
          Github <AiOutlineGithub />
        </a>
        <a href="https://www.linkedin.com/in/jessica-senger/" target="_blank">
          Linkedin <AiFillLinkedin />
        </a>
      </div>
      <div>
        <img src="./img/luciana.jpg" alt="Luciana" />
        <h4>Luciana Cunha</h4>
        <a href="https://github.com/luc0liv" target="_blank">
          Github <AiOutlineGithub />
        </a>
        <a href="https://www.linkedin.com/in/lucoliv/" target="_blank">
          Linkedin <AiFillLinkedin />
        </a>
      </div>
      <div>
        <img src="./img/sillas.jpeg" alt="Sillas" />
        <h4>Sillas Vidal</h4>
        <a href="https://github.com/sillasvidal" target="_blank">
          Github <AiOutlineGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/sillas-vidal-9739881b9/"
          target="_blank"
        >
          Linkedin <AiFillLinkedin />
        </a>
      </div>
    </AboutContainer>
  );
};

export default AboutUs;
