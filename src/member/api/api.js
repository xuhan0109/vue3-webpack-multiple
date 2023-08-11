import axios from 'axios';

const instance = axios.create({
//   baseURL: 'http://screen.subaonet.com/API_Common/screenAPI/api/Local/' // 根据你的实际情况设置基础URL
});

export const fetchData = () => {
  return instance.get('/get');
};

export const postData = (data) => {
  return instance.post('/api/Local/GetNewsInfo_Vareity', data);
};