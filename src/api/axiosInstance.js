import axios from "axios";

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

let setContextLoaderFn;

export const setLoader = (setLoading) => {
  setContextLoaderFn = setLoading;
};

export const showLoader = () => {
  if (setContextLoaderFn) setContextLoaderFn(true);
};

export const hideLoader = () => {
  if (setContextLoaderFn) setContextLoaderFn(false);
};

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const axiosInstance = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
  timeout: 5000,
});

axiosInstance.interceptors.request.use(
  (config) => {
    showLoader();
    return config;
  },
  (error) => {
    hideLoader();
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response) => {
    hideLoader();
    return response;
  },
  (error) => {
    hideLoader();
    return Promise.reject(error);
  }
);

export default axiosInstance;