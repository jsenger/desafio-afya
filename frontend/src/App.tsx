import GlobalStyles from "./assets/GlobalStyles";
import Routes from "./routes";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'devextreme/dist/css/dx.light.css';


const App: React.FC = () => {
  return (
    <>
      <GlobalStyles />
      <Routes />
    </>
  );
}

export default App;

