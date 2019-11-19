import axios from 'axios';

export function runCallback(cb) {
  cb && cb();
}

export function createObject(classItem) {
  return new classItem;
}

export function getData() {
  return axios.get('/api').then(res => res.data);
}