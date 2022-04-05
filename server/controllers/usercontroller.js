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
    res
      .status(200)
      .send(person)
  });
}

exports.create_user = async function (req, res) {
  try {
    console.log("create user endpoint called");
    let hash = await bcrypt.hash(req.body.password, saltRounds);
    const user = new User({
      username: req.body.username,
      password: hash,
      fName: req.body.fName,
      lName: req.body.lName,
      badges:[]
    });
    await user.save();
    res
      .json(user)
      .status(200)
      .send();
  } catch (err) {       // User most likely already exists
    console.error(err);
    res
      .status(401)
      .send();
  }
}

exports.user_login = function (req, res) {
  User.findOne({ username: req.body.username }, async function (err, user) {
    try {
      if (err) return console.error(err);

      // The following method checks if passwords match
      let result = await bcrypt.compare(req.body.password, user.password);

      // Checks if password matches; If not, throw error
      if (result == false) throw new Error('Password does not match');

      // Set request session object to user._id
      req.session.user = user._id;

      /**
       * Start building out response object
       * add a cookie to it
       * send it with status 200
       */
      console.log("Inside user login");
      return res
        .status(200)
        .cookie('userCookie', JSON.stringify({ id: user._id, fName: user.fName, lName: user.lName,badges:user.badges }), { maxAge: 1000 * 60 * 10 })
        .send({ "user": user.fName })
        .end()
    } catch (err) {     // If there are any errors, catch, print, and send 401
      console.error(err);
      return res
        .status(401)
        .send()
    }
  });
}