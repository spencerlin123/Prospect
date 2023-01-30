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
const Answer = require("./models/answer");

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

router.get("/createdgroups", (req, res) => {
  Group.find({ creator_id: req.user.googleid }).then((groups) => {
    res.send(groups);
  });
});

router.get("/joinedgroups", (req, res) => {
  Group.find({ user_id: req.user.googleid }).then((groups) => {
    res.send(groups);

    // const group = await Group.findOne({ group_code: req.body.group_code });
  });
});

router.get("/users", (req, res) => {
  User.find({ joined_groups: req.query.group_code }).then((users) => {
    res.send(users);
  });
});

router.post("/groups", (req, res) => {
  if (req.user) {
    const newGroup = new Group({
      title: req.body.title,
      description: req.body.description,
      img_url: req.body.img_url,
      prospects: 0,
      user_id: [],
      questions: req.body.questions,
      group_code: req.body.group_code,
      creator_id: req.user.googleid,
    });
    newGroup.save().then((group) => res.send(group));
  } else {
    res.send({
      succes: false,
      reason: "not logged in",
    });
  }
});

router.post("/editGroup", async (req, res) => {
  const group = await Group.findOne({ group_code: req.body.group_code });
  if (!group.user_id.includes(req.user.googleid)) {
    group.user_id = [...group.user_id, req.user.googleid];
    group.prospects = group.user_id.length;
    console.log(group);

    await group.save();

    User.findOne({ googleid: req.user.googleid }).then((user) => {
      console.log("HELLO FOUND THING");
      console.log(user);
      user.joined_groups = [...user.joined_groups, req.body.group_code];
      user.save();
      res.send({ success: true });
    });
  } else {
    res.status(400).send({ error: "You have already joined this group!" });
  }

  // if ((group.user_id).includes(req.user.googleid)) {
  //   res.status(400).send('You have already joined this group!')
  // }
});

router.post("/deleteprospect", async (req, res) => {
  Group.findOne({ group_code: req.body.group_code }).then((group) => {
    const ind = group.user_id.findIndex((element) => {
      return element == req.body.googleid;
    });
    const temp1 = group.user_id.slice(0, ind);
    const temp2 = group.user_id.slice(ind + 1);
    group.user_id = temp1.concat(temp2);
    group.save();

    User.findOne({ googleid: req.body.googleid }).then((user) => {
      const ind = user.joined_groups.findIndex((element) => {
        return element == req.body.group_code;
      });
      const temp1 = user.joined_groups.slice(0, ind);
      const temp2 = user.joined_groups.slice(ind + 1);
      user.joined_groups = temp1.concat(temp2);
      user.save();
    });
  });
});

router.post("/leavegroup", async (req, res) => {
  Group.findOne({ group_code: req.body.group_code }).then((group) => {
    const ind = group.user_id.findIndex((element) => {
      return element == req.body.googleid;
    });
    const temp1 = group.user_id.slice(0, ind);
    const temp2 = group.user_id.slice(ind + 1);
    group.user_id = temp1.concat(temp2);
    group.save();

    User.findOne({ googleid: req.body.googleid }).then((user) => {
      const ind = user.joined_groups.findIndex((element) => {
        return element == req.body.group_code;
      });
      const temp1 = user.joined_groups.slice(0, ind);
      const temp2 = user.joined_groups.slice(ind + 1);
      user.joined_groups = temp1.concat(temp2);
      user.save();
    });
  });
});

router.post("/deletegroup", async (req, res) => {
  console.log("delete group");
  Group.deleteOne({ group_code: req.body.group_code }).then((e) => {
    console.log(e);
    console.log("finished deleting");
  });
});

router.get("/test", (req, res) => {
  User.find({}).then((users) => {
    res.send(users);
  });
});

router.get("/group-questions", (req, res) => {
  Group.findOne({ group_code: req.query.group_code }).then((group) => {
    res.send(group);
  });
});

router.post("/answers", (req, res) => {
  console.log(req.body.questions.length)
  console.log(req.body.answers.length)
  for (let i = 0; i < req.body.questions.length; i++){
    const newAnswer = new Answer({
      googleid: req.user.googleid,
      group_code: req.body.group_code,
      question: req.body.questions[i],
      answer: req.body.answers[i],
    });
    console.log(newAnswer);
    newAnswer.save();
    // newAnswer.save().then((answer) => res.send(answer));
  }
});

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
