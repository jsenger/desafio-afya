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
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [searchQuery, setSearchQuery] = useState<string>('');

  const searchSubmit = useCallback(
    async (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      setIsLoading(true);

      const response = await search({ endpoint, searchQuery });

      if (response.data.length) {
        setIsLoading(false);

        setResult(
          response.data.map((result: any) =>
            result.hasOwnProperty('profession')
              ? {
                  ...result,
                  profession_name: result.profession.name,
                }
              : result
          )
        );
      } else {
        setIsLoading(false);
        Swal.fire({
          title: 'Ops!',
          text: 'Nenhum resultado encontrado.',
          icon: 'error',
          confirmButtonText: 'Fechar',
          confirmButtonColor: '#ff312e',
        });
      }
    },
    [endpoint, searchQuery, setResult]
  );

  return (
    <SearchField onSubmit={searchSubmit}>
      <label htmlFor="header-search">{title}</label>
      <input
        type="text"
        id="header-search"
        placeholder="Digite aqui..."
        name="search"
        onChange={e => setSearchQuery(e.target.value)}
      />
      <button type="submit">
        {isLoading ? 'Pesquisando...' : 'Pesquisar'}
      </button>
    </SearchField>
  );
}
