import { api } from './api';

interface SearchParams {
  endpoint: string;
  params: string;
}

export const search = ({ endpoint, params }: SearchParams) => {
  return api
    .get(`${endpoint}?name=${params}`, {
      headers: {
        authorization: `Bearer ${localStorage.getItem('@tokenVitality')}`,
      },
    })
    .then(response => response);
};
