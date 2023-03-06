import Axios from './axios';

const axios = new Axios();

export const postSignup = (data) => {
    const res = axios.post('/api/users/signup', data);
    return res;
};

export const postSignin = (data) => {
    const res = axios.post('/api/users/login', data);
    return res;
};

export const getHouses = (filter) => {
    const res = axios.get('/api/houses');
    return res;
};

// /api/houses?peopleCount=3&minPrice=0&maxPrice=100000&startDate=2023-03-04&endDate=2023-03-10&page=0&size=10&sortBy=id&isAsc=false

export const getWishList = (data) => {
    const res = axios.getToken('api/houses/wish', { headers: { Authorization: data } });
    return res;
};