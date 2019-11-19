import axios from 'axios';

export const fetchData1 = (fn) => {
  axios.get('http://www.dell-lee.com/react/api/demo.json').then(res => {
    fn(res.data);
  });
}

export const fetchData2 = () => axios.get('http://www.dell-lee.com/react/api/demo.json');

export const fetchData3 = () => axios.get('http://www.dell-lee.com/react/api/demo1.json');