import usersDAO from "./api/usersDAO.js";
const User = require('./models/user.model.js');

export default class UsersController {
    static async apiGetUsers(req, res, next) {
        console.log("IM HERE ");
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
                points: req.body.points
            });

            const userResponse = await usersDAO.addUser(newUser);
            res.json("The user: " + JSON.stringify(userResponse));
        } catch (e) {
            res.status(500).json({error: e.message});
        }
    }

    static async apiFindUser (req, res, next) {
        try {
            const users = await usersDAO.findUser(req.params.username);
            console.log("The username: " + { users });
            
            res.json({users});
            /*
            if (email) {
                res.json(email);
            } else {
                res.json("Cannot find user.");
            }*/
            //res.json("Finding userList successfully called.");
        } catch (e) {
            res.status(500).json({error: e.message});
        }
    }
}