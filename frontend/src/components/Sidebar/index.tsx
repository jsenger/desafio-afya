import { SideBarContainer } from "./styles";
import { Link } from "react-router-dom";

const Sidebar: React.FC = () => {
  return (
    <SideBarContainer>
      <div className="menu-icons">
        <img src="./img/vit_logo.svg" alt="Vitality logo" width="30%" />
        <img src="./img/menu-button.svg" alt="Menu icon" width="15%" />
      </div>

      <div className="menu-links">
      <hr />
        <Link to="#">Clientes</Link>
        <Link to="#">Especialistas</Link>
        <Link to="#">Atendimentos</Link>
        <Link to="#">Prontuários</Link>
        <hr />
      </div>

      <div className="logout">
        <Link to="#">Logout</Link>
      </div>
    </SideBarContainer>
  );
};

export default Sidebar;
