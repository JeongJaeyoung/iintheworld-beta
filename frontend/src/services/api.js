import Axios from 'axios';
import { API_HOST } from "./Constants";
import { makeUseAxios } from 'axios-hooks';


export const axiosInstance = Axios.create({
    baseURL: API_HOST
});


export const useAxios = makeUseAxios({
    axios: axiosInstance
});