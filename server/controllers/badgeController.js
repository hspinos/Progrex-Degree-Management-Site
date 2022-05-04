let Badge = require("../models/badgemodel");
let userModel = require("../models/usermodel");
badge = new Badge();
const mongoose = require("mongoose");
const usermodel = require("../models/usermodel");
const session = require("express-session");
const cookieParser = require("cookie-parser");
const cookie = require("cookie");
const RedisStore = require("connect-redis")(session);
const { connect, request } = require("..");
const { RedisClient } = require("redis");
exports.test_document_endpoint = function (req, res) {
  res.send("This is the test_document_endpoint");
};


const status = {requested:"requested", approved:"approved",declined: "declined"}


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

exports.getCommonBadges = async function (req, res) {
  try {
    let query = Badge.find({isCommon: true});
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
    //console.error(err);
    res.status(401).send(err);
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


//Returns list badges by user id
exports.getAllWithUserId = async function (req, res) {
  try {
    let userId = req.body.userId
    const badges = await Badge.find({ requester: userId  });
    return res.status(200).send(badges);
  } catch (err) {
    console.error("error finding badges \n" + err);
  }
};




//returns single badge by id
exports.getBadgeById = async function (req, res) {
  try {
    //console.log(req.query.id)
    const badge = await Badge.findById(req.query.id);
    res.json(badge).status(200).send();
    //console.log(badge)
  } catch (err) {
    //console.error(err);
    res.status(401).send(err);
  }
};

//returns single badge by id
exports.approveBadge = async function (req, res) {
  try {
    //console.log(req.query.id)
    // const badge = await Badge.findById(req.query.id);
    const badge = await Badge.updateOne({_id: req.query.id}, {$set:{status:status.approved}})
    res.json(badge).status(200).send();
    //console.log(badge)
  } catch (err) {
    //console.error(err);
    res.status(401).send(err);
  }
};
//returns single badge by id
exports.declineBadge = async function (req, res) {
  try {
    //console.log(req.query.id)
    // const badge = await Badge.findById(req.query.id);
    const badge = await Badge.updateOne({_id: req.query.id}, {$set:{status:status.declined}})
    res.json(badge).status(200).send();
    //console.log(badge)
  } catch (err) {
    console.error(err);
  }
};

//returns single badge by id
// exports.addToCommon = async function (req, res) {
//   try {
//     console.log(req.query.id)
//     const badge = await Badge.findById(req.query.id);
//     res.json(badge).status(200).send();
//     console.log(badge)
//   } catch (err) {
//     console.error(err);
//   }
// };


exports.createBadge = async function (req, res) {
  try {
    //console.log("create badge endpoint called");
    // let userId = mongoose.Types.ObjectId(req.params.userId);
    
    const badge = new Badge({
      status: req.body.status,
      badgeName: req.body.badgeName,
      description: req.body.description,
      dateRequested: req.body.dateRequested,
      dateRequested: req.body.dateRequested,
      dateApproved: req.body.dateApproved,
      dateDeclined:req.body.dateDeclined,
      isCommon:req.body.isCommon,
      requester: req.body.requester,
      referance: req.body.referance
    });
    await badge.save();
    res.json(badge).status(200).send();

    // let cookieString = req.headers.cookie;
    // const cookieParsed = await cookie.parse(cookieString);
    // console.log("cookieParsed:", cookieParsed);
    // let sidParsed ={}
    // if (cookieParsed["userCookie"]) {
    //   sidParsed= await JSON.parse(cookieParser.signedCookie(
    //     cookieParsed["userCookie"],
    //     "partycat"
    //   ));
    //   console.log(sidParsed.id);
    // }
    // user = await usermodel.findOne({ _id: sidParsed.id });
    // console.log(user);
    // await userModel.updateOne(
    //   { username: user.username },
    //   { $push: { badges: badge._id } }
    // );
    // console.log(JSON.stringify(cookieParser.signedCookie(session, "partycat")));
  } catch (err) {
    console.error(err);
    res.status(401).send();
  }
};
