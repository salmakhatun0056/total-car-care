import axios from "axios";

const fetcher = axios.create({
    baseURL: 'https://ancient-caverns-35503.herokuapp.com/'
});
export default fetcher