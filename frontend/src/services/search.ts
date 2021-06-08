import { api } from './api';

interface SearchParams {
  endpoint: string;
  searchQuery: string;
}

export const search = ({ endpoint, searchQuery }: SearchParams) => {
  return api
    .get(endpoint, {
      headers: {
        authorization: `Bearer ${localStorage.getItem('@tokenVitality')}`,
      },
      params: {
        name: searchQuery,
        email: searchQuery,
        cpf: searchQuery,
        register: searchQuery,
      },
    })
    .then(response => response);
};
