import axios from "axios";
const BASE_URL = "https://637a3fd17419b414df9d2045.mockapi.io"

export const getListUserApi = () => {
    return axios.get(`${BASE_URL}/username`)
}

export const getListUserById = (userId) => {
    return axios.get(`${BASE_URL}/username/${userId}`)
}
export const getAddUserApi = (user) => {
    return axios.post(`${BASE_URL}/username`, user)
}
export const getDeleteUserApi = (userId) => {
    return axios.delete(`${BASE_URL}/username/${userId}`)
}
export const getEditUserApi = (userId, user) => {
    return axios.put(`${BASE_URL}/username/${userId}`,user)
}
export const createUserApi = (user) => {
    return axios.post(`${BASE_URL}/username`, user)
}