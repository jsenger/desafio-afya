import { api } from './api';

interface SearchParams {
  endpoint: string;
  params: object;
}

export const search = ({ endpoint, params }: SearchParams) => {
  return api
    .get(endpoint, {
      headers: {
        authorization: `Bearer ${localStorage.getItem('@tokenVitality')}`,
      },
      params
    })
    .then(response => response);
};
