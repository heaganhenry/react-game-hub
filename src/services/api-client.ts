import axios from "axios";

export default axios.create({
    baseURL: "https://api.rawg.io/api",
    params: {
        key: "d9d990b59d23482e840f2300b85bf24e"
    }
});