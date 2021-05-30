import { SearchField } from './styles'

const Search: React.FC = () => {
  return (
    <SearchField>
      <form>
      <label htmlFor="header-search">
            Pesquisar clientes:
      </label>
        <input
            type="text"
            id="header-search"
            placeholder="Digite aqui..."
            name="search"
        />
        <button type="submit">Pesquisar</button>
    </form>
    </SearchField>
  );
}

export default Search;