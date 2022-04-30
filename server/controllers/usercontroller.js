const bcrypt = require('bcrypt');
let User = require('../models/usermodel');

const saltRounds = 10;

exports.test_user_endpoint = function (req, res) {
  res
    .status(200)
    .send('This is the test_user_endpoint');
}

/* 
 * After making query, we need to make selection
 * to specify what fields we want to return
*/
exports.get_users = async function (req, res) {
  let query = User.find({});
  //query.select("username password");
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

exports.user_detail = async function (req, res){
  try{
    const user = await User.findById(req.params.id);
    res
      .status(200)
      .send(user)
  }catch (err){
    console.error(err);
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
        .cookie('userCookie', JSON.stringify({ id: user._id, fName: user.fName, lName: user.lName, isAdmin: user.isAdmin }), { maxAge: 1000 * 60 * 60 * 24 })
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

exports.user_logout = function (req, res) {
  req.session.destroy();
  res
    .status(200)
    .send()
}

exports.update_userInfo = async function (req, res){
  try{
    const user = await User.findById(req.params.id);
    if (req.body.fName) user.fName = req.body.fName;
    if (req.body.lName) user.lName = req.body.lName;
    if (req.body.avatarNum) user.avatarNum = req.body.avatarNum;
    if (req.body.displayBadgeNum) user.displayBadgeNum = req.body.displayBadgeNum;
    await user.save();
    res.json(user).status(200).send();
  }catch (err){
    console.log(err);
    res.status(401).send();
  }

}
