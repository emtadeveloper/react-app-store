import axios from "axios";
import { AxiosResponse } from "axios";
axios.defaults.baseURL = process.env.REACT_APP_BASE;

const get = (url: string, config: object = {}) => {
    return axios
        .get(url, config)
        .then((response: AxiosResponse) => response)
        .catch((error) => console.log(error));
};

const post = (url: string, config: object = {}) => {
    return axios
        .post(url, config)
        .then((response: AxiosResponse) => response)
        .catch((error) => console.log(error));
};

export { get, post };
