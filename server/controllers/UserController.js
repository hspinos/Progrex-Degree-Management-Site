exports.test_user_endpoint = function (req, res) {
  res.send('This is the test_user_endpoint');
}

exports.create_user = function (req, res) {
  res.send('This is the create_user_endpoint');
}

exports.user_login = function (req, res) {
  console.log("username: " + req.body.username);
  console.log("password: " + req.body.password);
  res.sendStatus(200);
}