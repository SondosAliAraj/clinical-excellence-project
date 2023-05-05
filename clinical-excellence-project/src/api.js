// 
import axios from "axios";

const baseUrl = "https://jsonplaceholder.typicode.com";

export const getUsers = () => {
  return axios.get(`${baseUrl}/users`);
};

export const addUser = (user) => {
  return axios.post(`${baseUrl}/users`, user);
};

export const deleteUser = (id) => {
  return axios.delete(`${baseUrl}/users/${id}`);
};

export const updateUser = (id, user) => {
  return axios.put(`${baseUrl}/users/${id}`, user);
};
