import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://desafioafya.herokuapp.com/',
});

export const viaCepApi = axios.create({
  baseURL: 'https://viacep.com.br/ws/',
});