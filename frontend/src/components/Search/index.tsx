import { SearchField } from './styles';

const Search: React.FC = () => {
  return (
    <SearchField>
      <label htmlFor="header-search">Pesquisar clientes:</label>
      <input
        type="text"
        id="header-search"
        placeholder="Digite aqui..."
        name="search"
      />
      <button type="submit">Pesquisar</button>
    </SearchField>
  );
};

export default Search;
