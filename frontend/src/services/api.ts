
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3001',
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${localStorage.getItem("acessToken")}`, 
  },
});





// // Define your API functions
// const fetchData = async () => {
//   try {
//     const response = await api.get('/endpoint');
//     return response.data;
//   } catch (error) {
//     throw error;
//   }
// };

// const postData = async () => {
//   try {
//     const response = await api.post('/post-endpoint', data);
//     return response.data;
//   } catch (error) {
//     throw error;
//   }
// };

// export { fetchData, postData };
