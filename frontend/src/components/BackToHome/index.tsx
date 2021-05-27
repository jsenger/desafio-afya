import { Link } from 'react-router-dom';
import { HiOutlineHome } from 'react-icons/hi';
import { IconContext } from "react-icons";
import { BackHome } from './styles';


const BackToHome: React.FC = () => {
  return (
    <BackHome>
    <IconContext.Provider value={{ className: 'react-icons' }}>
    <Link to="/"><HiOutlineHome /> Voltar para a página inicial</Link>
    </IconContext.Provider>
    </BackHome>
  );
}

export default BackToHome;