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

export const getAllHommies =() => axios.get(`${baseUrl}hommy/`, getHeaders());

export const login = (params) => axios.post(`${baseUrl}auth/login`, params);
export const getHommy = (id) => axios.get(`${baseUrl}hommy/${id}`, getHeaders());

export const deleteHommy = (id) => axios.delete(`${baseUrl}hommy/${id}`, getHeaders());

export const editHommyApi = (params) => axios.put(`${baseUrl}hommy/${params.id}`, params, getHeaders());
export const addHommy = (params) => axios.post(`${baseUrl}hommy/`, params, getHeaders());


export const closeNewDay = (params) => axios.post(`${baseUrl}actions/newday/closeday`, params, getHeaders());

