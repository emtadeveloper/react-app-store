import axios from "axios";

axios.defaults.baseURL = process.env.REACT_APP_BASE;

const get = (url: string, config: object = {}): any => {
    return axios
        .get(url, config)
        .then((response) => response)
        .catch((error) => console.log(error));
};

const post = (url: string, config: object = {}): object => {
    return axios
        .post(url, config)
        .then((response) => response.data)
        .catch((error) => console.log(error));
};

export { get, post };
