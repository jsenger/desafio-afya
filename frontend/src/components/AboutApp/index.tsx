import { AboutAppContainer } from "./styles";

const AboutApp: React.FC = () => {
  return (
    <AboutAppContainer id="app">
      <section className="content-container">
        <div>
          <img src="./img/customer.png" width="80px" />
          <h4>Cadastro de Clientes</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Necessitatibus mollitia eligendi neque corrupti asperiores, qui odit
            culpa. Provident praesentium necessitatibus deleniti mollitia
            obcaecati architecto ab neque perferendis! Consequatur, qui aperiam.
          </p>
        </div>
        <div>
          <img src="./img/register.png" width="80px" />
          <h4>Cadastro de Especialistas</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Necessitatibus mollitia eligendi neque corrupti asperiores, qui odit
            culpa. Provident praesentium necessitatibus deleniti mollitia
            obcaecati architecto ab neque perferendis! Consequatur, qui aperiam.
          </p>
        </div>
        <div>
          <img src="./img/medical-appointment.png" width="80px" />
          <h4>Agende atendimentos</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Necessitatibus mollitia eligendi neque corrupti asperiores, qui odit
            culpa. Provident praesentium necessitatibus deleniti mollitia
            obcaecati architecto ab neque perferendis! Consequatur, qui aperiam.
          </p>
        </div>
        <div>
          <img src="./img/profile.png" width="80px" />
          <h4>Prontuários</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Necessitatibus mollitia eligendi neque corrupti asperiores, qui odit
            culpa. Provident praesentium necessitatibus deleniti mollitia
            obcaecati architecto ab neque perferendis! Consequatur, qui aperiam.
          </p>
        </div>
      </section>
    </AboutAppContainer>
  );
};

export default AboutApp;
