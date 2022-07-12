import express from "express";
import UsersCtrl from "../users.controller.js";

const router = express.Router();

router
    .route("/")
    .get(UsersCtrl.apiGetUsers)
    .post(UsersCtrl.apiPostUser);


//Finds a specific user by username
router
    .route(`/username/:username`)
    .get(UsersCtrl.apiFindUser);


export default router;