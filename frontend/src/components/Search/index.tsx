import {
  Dispatch,
  FormEvent,
  SetStateAction,
  useCallback,
  useState,
} from 'react';
import Swal from 'sweetalert2';
import { search } from '../../services/search';
import { SearchField } from './styles';

interface SearchProps {
  title: string;
  endpoint: string;
  setResult: Dispatch<SetStateAction<any>>;
}

export default function Search({ title, endpoint, setResult }: SearchProps) {
  const [searchParams, setSearchParams] = useState<string>('');

  const searchSubmit = useCallback(
    async (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      const response = await search({ endpoint, params: searchParams });

      if (response.data.length) {
        setResult(response.data);
      } else {
        Swal.fire({
          title: 'Ops!',
          text: 'Nenhum resultado encontrado.',
          icon: 'error',
          confirmButtonText: 'Fechar',
          confirmButtonColor: '#ff312e',
        });
      }
    },
    [endpoint, searchParams, setResult]
  );

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
