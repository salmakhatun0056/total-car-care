import axios from "axios";

const fetcher = axios.create({
    baseURL: 'https://totalcar-care.up.railway.app/'
});
export default fetcher