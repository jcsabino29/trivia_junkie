import http from '../http-common.js';

class UserDataService {
    getAll() {
        return http.get('/');
    }

    createUser(data) {
        return http.post("/", data);
    }

    findUser(username) {
        return http.get("/", username);
    }
}

export default new UserDataService();