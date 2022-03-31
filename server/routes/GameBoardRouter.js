const express = require('express');
const gameBoardRouter = express.Router();

const gameBoardController = require('../controllers/gameBoardController');

gameBoardRouter.get('/list', gameBoardController.get_users);

module.exports = gameBoardRouter;