/*
|--------------------------------------------------------------------------
| api.js -- server routes
|--------------------------------------------------------------------------
|
| This file defines the routes for your server.
|
*/

const express = require("express");

// import models so we can interact with the database
const User = require("./models/user");
const Group = require("./models/group");

// import authentication library
const auth = require("./auth");

// api endpoints: all these paths will be prefixed with "/api/"
const router = express.Router();

//initialize socket
const socketManager = require("./server-socket");

router.post("/login", auth.login);
router.post("/logout", auth.logout);
router.get("/whoami", (req, res) => {
  if (!req.user) {
    // not logged in
    return res.send({});
  }

  res.send(req.user);
});

router.post("/initsocket", (req, res) => {
  // do nothing if user not logged in
  if (req.user)
    socketManager.addUser(req.user, socketManager.getSocketFromSocketID(req.body.socketid));
  res.send({});
});

// |------------------------------|
// | write your API methods below!|
// |------------------------------|

router.get("/groups", (req, res) => {
  Group.find({}).then((groups) => {
    res.send(groups);
  })
})

router.get("/users", (req, res) => {
  User.find({}).then((users) => {
    res.send(users);
  })
})

router.post("/groups", (req, res) => {
  const newGroup = new Group({
    title: req.body.title,
    description: req.body.description,
    img_url: req.body.img_url,
    prospects: 0,
    user_id: [],
    questions: req.body.questions,
    group_code: req.body.creator_id
  });
  newGroup.save().then(group => res.send(group));
})

router.post("/dummytest", async (req, res) => {
  const group = await groups.findOne({group_code: req.body.group_code});

  group.user_id.concat("278378");

  await group.save();

  res.send({success: true});
})

// router.get("/tests", (req, res) => {
// // create 3 group documents here
//   const group1 = new Group({
//     img_url: "https://pkimgcdn.peekyou.com/431f08b5929cc20395d7c2562721ba23.jpeg",
//     title: "Ben",
//     description: "This is a cute Ben",
//     prospects: 1
//   });

//   group1.save().then((group1) => {
//     res.send(group1);
//   })
// })

// anything else falls to this "not found" case
router.all("*", (req, res) => {
  console.log(`API route not found: ${req.method} ${req.url}`);
  res.status(404).send({ msg: "API route not found" });
});

module.exports = router;
