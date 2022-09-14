const router = require("express").Router();
const {
  models: { User },
} = require("../db");

//we're in /api/login
router.post("/", async (req, res, next) => {
  try {
    console.log(req.body);
    const user = await User.authenticate(req.body);
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
