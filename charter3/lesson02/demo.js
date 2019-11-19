import axios from 'axios';

export function getData() {
  return axios.get('/api').then(res => res.data);
}

export function getNum() {
  return 1;
}
