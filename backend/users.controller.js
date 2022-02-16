import usersDAO from "./api/usersDAO.js";

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
            const fullName = req.body.fullName;
            const username = req.body.username;
            const password = req.body.password;
            const email_address = req.body.email_address;
            const points = req.body.points;

            const userResponse = await usersDAO.addUser(
                fullName,
                username,
                password,
                email_address,
                points
            )
            res.json("Added userList.")
        } catch (e) {
            res.status(500).json({error: e.message});
        }
    }

    static async apiFindUser (req, res, next) {
        try {
            const userResponse = await usersDAO.findUser(req.body.username);
            if (userResponse) {
                res.json("Found userList.");
                return req.body.username;
            } else {
                res.json("Cannot find userList.");
            }
            res.json("Finding userList successfully called.");
        } catch (e) {
            res.status(500).json({error: e.message});
        }
    }
}