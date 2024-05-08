import axios from 'axios'

const axiosInstance = axios.create({
    method: 'get',
    baseURL: 'https://www.themealdb.com/api/json/v1/1',
});

export default axiosInstance