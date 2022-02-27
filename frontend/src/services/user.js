import http from '../http-common.js';

class UserDataService {
    createUser(data) {
        return http.post('/', data);
    }

    findUser(email_address, username) {
        console.log("THE QUERY: " + email_address + " USER: " + username);
        return http.get(`?username=${username}&email_address=${email_address}`);
    }
}

export default new UserDataService();