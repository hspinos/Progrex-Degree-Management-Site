const bcrypt = require('bcrypt');
let gameBoard = require('../models/gameBoardModel');


exports.get_users = function(req, res){
    let query = gameBoard.find({});
    query.exec(function (err, avatars){
        if (err) return handleError(err);
        res
            .status(200)
            .send(avatars)
    });
}
