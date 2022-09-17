const router = require("express").Router();
const {
  models: { User },
} = require("../db");

//we're in /api/signup
// router.post("/", async (req, res, next) => {
//   try {
//     // console.log("print this string", req.body.username);
//     const user = await User.create(req.body);
//     if (user) {
//       res.send(user);
//     } else {
//       console.log(user);
//     }
//   } catch (error) {
//     next(error);
//   }
// });

router.post("/", async (req, res, next) => {
  try {
    const user = await User.create(req.body);
    res.send({ token: await user.generateToken() });
  } catch (err) {
    if (err.name === "SequelizeUniqueConstraintError") {
      res.status(401).send("User already exists");
    } else {
      next(err);
    }
  }
});

module.exports = router;
