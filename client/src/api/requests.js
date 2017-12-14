import axios from 'axios';

const baseUrl = `http://localhost:3001/`;


const getHeaders = () => {
  if (window.localStorage.getItem('persist:root')) {
    const data = JSON.parse(window.localStorage.getItem('persist:root'));
    const {token} = (JSON.parse(data.getToken));
    const opt = {
      headers: {
        'Content-Type':"application/json",
        'Authorization': `Bearer ${token}`
      }
    };
    return opt;
  }
  return null;
};


export const getAllUsers =() => axios.get(`${baseUrl}user/`, getHeaders());


export const login = (params) => axios.post(`${baseUrl}auth/login`, params);
export const getUser = (id) => axios.get(`${baseUrl}user/${id}`);


export const deleteUser = (id) => axios.delete(`${baseUrl}user/${id}`);
export const editUser = (id) => axios.put(`${baseUrl}user/${id}`);
export const addUser = (params) => axios.post(`${baseUrl}user`, params);



