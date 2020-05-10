import axios from "axios";

const client = axios.create();

client.defaults.baseURL = process.env.REACT_APP_API_URL;
client.defaults.headers.common["apiKey"] = process.env.REACT_APP_API_KEY;
// client.defaults.withCredentials = true;

export default client;
