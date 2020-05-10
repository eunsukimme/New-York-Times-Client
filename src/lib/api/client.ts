import axios from "axios";

const client = axios.create();

client.defaults.baseURL = process.env.REACT_APP_API_URL;
/** add default params */
client.interceptors.request.use((config) => {
  config.params = config.params || {};
  config.params["api-key"] = process.env.REACT_APP_API_KEY;
  return config;
});
/** add interceptor for reaponse */
// Add a response interceptor
client.interceptors.response.use(
  (res) => res.data.response,
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  }
);

export default client;
