import { Link } from 'react-router-dom';
import { BackHome } from './styles';

const BackToHome: React.FC = () => {
  return (
    <BackHome>
    <Link to="/">Voltar para a página inicial</Link>
    </BackHome>

  );
}

export default BackToHome;