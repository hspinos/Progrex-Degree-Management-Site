let Badge = require("../models/badgemodel");
let userModel = require("../models/usermodel");
badge = new Badge();
const mongoose = require("mongoose");
const usermodel = require("../models/usermodel");
const session = require("express-session");
const cookieParser = require("cookie-parser");
const cookie = require("cookie");
const RedisStore = require("connect-redis")(session);
const { connect } = require("..");
const { RedisClient } = require("redis");
exports.test_document_endpoint = function (req, res) {
  res.send("This is the test_document_endpoint");
};

//returns all badges from the database
exports.getAllBadges = async function (req, res) {
  try {
    let query = Badge.find({});
    query.exec(function (err, badge) {
      if (err) return handleError(err);
      res.status(200).send(badge);
    });
  } catch (err) {
    console.error(err);
  }
};

//returns all badges from the database
exports.deleteAllBadges = async function (req, res) {
  try {
    let query = Badge.deleteMany({});
    query.exec(function (err, badge) {
      if (err) return handleError(err);
      res.status(200).send(badge);
    });
  } catch (err) {
    console.error(err);
  }
};

//Returns list badges by ids
exports.getBadgesByIds = async function (req, res) {
  try {
    const badges = await Badge.find({ _id: { $in: req.body.ids } });
    return res.status(200).send(badges);
  } catch (err) {
    console.error("error finding badges \n" + err);
  }
};
//returns single badge by id
exports.getBadgeById = async function (req, res) {
  try {
    const badge = await badge.findById(req.params.id);
    res.json(badge).status(200).send();
  } catch (err) {
    console.error(err);
  }
};

exports.createBadge = async function (req, res) {
  try {
    console.log("create badge endpoint called");
    const badge = new Badge({
      isApproved: req.body.isApproved,
      badgeName: req.body.badgeName,
      description: req.body.description,
    });
    await badge.save();
    res.json(badge).status(200).send();

    let cookieString = req.headers.cookie;
    const cookieParsed = await cookie.parse(cookieString);
    console.log("cookieParsed:", cookieParsed);
    let sidParsed ={}
    if (cookieParsed["userCookie"]) {
      sidParsed= await JSON.parse(cookieParser.signedCookie(
        cookieParsed["userCookie"],
        "partycat"
      ));
      console.log(sidParsed.id);
    }
    user = await usermodel.findOne({ _id: sidParsed.id });
    console.log(user);
    await userModel.updateOne(
      { username: user.username },
      { $push: { badges: badge._id } }
    );
    // console.log(JSON.stringify(cookieParser.signedCookie(session, "partycat")));
  } catch (err) {
    console.error(err);
    res.status(401).send();
  }
};
