const bcrypt = require('bcrypt');
let gameBoard = require('../models/gameboardmodel');

const fakeData = [{FName: "Jonathan", LName: "Nguyen", position: 0, avatarNum: 0},
    {FName: "Hayden", LName: "Spinos", position: 1, avatarNum: 1},
    {FName: "Nate", LName: "Agcaoili", position: 2, avatarNum: 2},
    {FName: "Eli", LName: "Horowitz", position: 3, avatarNum: 0},
    {FName: "Elias", LName: "Binchamo", position: 4, avatarNum: 1}
]

exports.get_users = function(req, res){
    // let query = gameBoard.find({});
    // query.exec(function (err, avatars){
    //     if (err) return handleError(err);
    //     res
    //         .status(200)
    //         .send(avatars)
    // });
    console.log("within list route")
    res.send(fakeData);
}
