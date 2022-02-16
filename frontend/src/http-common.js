import axios from "axios";

export default axios.create({
    baseUrl: "localhost:5000/api/v1/users",
    headers: {
        "Content-type": "application/json"
    }
});