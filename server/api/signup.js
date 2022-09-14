const router = require("express").Router();
const {
  models: { User },
} = require("../db");

//we're in /api/signup
router.post("/", async (req, res, next) => {
  try {
    const user = await User.create(req.body);
    if (user) {
      res.send(user);
    } else {
      console.log(user);
    }
  } catch (error) {
    next(error);
  }
});

module.exports = router;
