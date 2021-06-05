import { Dispatch, FormEvent, SetStateAction, useCallback, useState } from 'react';
import { search } from '../../services/search';
import { SearchField } from './styles';

interface SearchProps {
  title: string;
  endpoint: string;
  setResult: Dispatch<SetStateAction<any>>;
}

export default function Search({ title, endpoint, setResult }: SearchProps) {
  const [searchParams, setSearchParams] = useState<string>('');

  const searchSubmit = useCallback(async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const response = await search({ endpoint, params: searchParams });
    
    setResult(response.data);
    
  }, [endpoint, searchParams, setResult]);

  return (
    <SearchField onSubmit={searchSubmit}>
      <label htmlFor="header-search">{title}</label>
      <input
        type="text"
        id="header-search"
        placeholder="Digite aqui..."
        name="search"
        onChange={e => setSearchParams(e.target.value)}
      />
      <button type="submit">Pesquisar</button>
    </SearchField>
  );
}
