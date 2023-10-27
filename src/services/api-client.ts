import axios from "axios";

export default axios.create ({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '0fb6bc29a1ae40fc8a605e6cdff9b325'
    }
})