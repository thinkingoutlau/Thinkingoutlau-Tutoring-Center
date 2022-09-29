const router = require("express").Router();
const User = require("../db/models/User");

router.get("/", async (req, res, next) => {
  try {
    const users = await User.findAll({
      attributes: ["id", "username"],
    });
    res.json(users);
  } catch (error) {
    next(error);
  }
});

// router.post("/", async (req, res, next) => {
//   try {
//     console.log(req.body);
//     const user = await User.authenticate(req.body);
//     if (user) {
//       res.send(user);
//     } else {
//       console.log(user);
//     }
//   } catch (error) {
//     next(error);
//   }
// });

module.exports = router;
