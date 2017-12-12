import axios from 'axios';

const baseUrl = `http://localhost:3001/`;


export const login = (params) => axios.post(`${baseUrl}auth/login`, params);

export const getUser = (id) => axios.get(`${baseUrl}/user/${id}`);
export const getAllUsers =() => axios.get(`${baseUrl}/user`);

export const deleteUser = (id) => axios.delete(`${baseUrl}/user/${id}`);
export const editUser = (id) => axios.put(`${baseUrl}/user/${id}`);

export const addUser = (params) => axios.post(`${baseUrl}/user`, params);