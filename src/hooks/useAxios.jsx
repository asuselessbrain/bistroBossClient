import axios from 'axios';

const axiosSecure = axios.create({
  baseURL: "http://localhost:3000",
});

const useAxios = () => {
  return axiosSecure;
};

export default useAxios;
