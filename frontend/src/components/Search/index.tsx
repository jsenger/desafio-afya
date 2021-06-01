import { SearchField } from './styles';

interface SearchProps {
  title: string;
}

export default function Search(props: SearchProps)  {
  return (
    <SearchField>
      <label htmlFor="header-search">{props.title}</label>
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

