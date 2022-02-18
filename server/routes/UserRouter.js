const express = require('express');
const userRouter = express.Router();

const userController = require('../controllers/UserController');

userRouter.get("/test", userController.test_user_endpoint)

userRouter.get("/create", userController.create_user);

userRouter.post("/login", userController.user_login);

module.exports = userRouter;