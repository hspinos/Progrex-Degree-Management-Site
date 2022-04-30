const express = require('express');
const userRouter = express.Router();

const userController = require('../controllers/usercontroller');

userRouter.get("/test", userController.test_user_endpoint)

userRouter.get("/list", userController.get_users);

userRouter.post("/create", userController.create_user);

userRouter.post("/login", userController.user_login);

userRouter.get("/detail/:id", userController.user_detail);

userRouter.get("/logout", userController.user_logout);

userRouter.put("/update/:id", userController.update_userInfo);

module.exports = userRouter;
