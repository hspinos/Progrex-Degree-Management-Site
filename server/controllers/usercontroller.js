const bcrypt = require('bcrypt');
let User = require('../models/usermodel');

const saltRounds = 10;

exports.test_user_endpoint = function (req, res) {
  res.send('This is the test_user_endpoint');
}

/* 
 * After making query, we need to make selection
 * to specify what fields we want to return
*/
exports.get_users = async function (req, res) {
  let query = User.find({});
  query.select("username password");
  query.exec(function (err, person) {
    if (err) return handleError(err);
    res.send(person)
  });
}

exports.create_user = async function (req, res) {
  try {
    console.log("create user endpoint called");
    let hash = await bcrypt.hash(req.body.password, saltRounds);
    const user = new User({ username: req.body.username, password: hash });
    await user.save();
    res
      .json(user)
      .status(200)
      .send();
  } catch (err) {
    console.error(err);
    res.sendStatus(401);
  }
}

exports.user_login = function (req, res) {
  console.log("username: " + req.body.username);
  console.log("password: " + req.body.password);
  res.sendStatus(200);
}