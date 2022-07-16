import usersDAO from "./api/usersDAO.js";
import { User } from "./models/user.model.js";

export default class UsersController {
    static async apiGetUsers(req, res, next) {
        try {
            const userList = await usersDAO.getUsers();
            
            if (userList) {
                console.log("There are users")
                res.json({userList})
            } else {
                res.json("No users.");
            }
        } catch (e) {
            res.status(500).json({error: e.message});
        }
    }

    static async apiPostUser(req, res, next) {
        try {
            const newUser = User({
                fullName: req.body.fullName,
                username: req.body.username,
                password: req.body.password,
                email_address: req.body.email_address,
                points: Number(1000)
            });

            if (await usersDAO.findUser(req.body.email_address)) {
                res.json("Error the that email address is already being used.");
            } else if (await usersDAO.findUser(req.body.username)) {
                res.json("Error that username is already taken.");
            } else {
                const userResponse = await usersDAO.addUser(newUser);
                res.json("The user: " + JSON.stringify(userResponse));
            }
        } catch (e) {
            res.status(500).json({error: e.message});
        }
    }

    static async apiFindUser (req, res, next) {
        try {
            const users = await usersDAO.findUser(req.params.username);
            console.log("The username: " + { users });
            
            res.json({users});
            return users;
        } catch (e) {
            res.status(500).json({error: e.message});
        }
    }
}