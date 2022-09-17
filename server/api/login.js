const router = require("express").Router();
const {
  models: { User },
} = require("../db");

//we now have access to headers.auth which we stored the token in from frontend
//we can now find the user using that token to send that info back to the frontend
router.get("/", async (req, res, next) => {
  try {
    res.send(await User.findByToken(req.headers.authorization));
  } catch (error) {
    next(error);
  }
});
router.post("/", async (req, res, next) => {
  try {
    const user = await User.authenticate(req.body);
    if (user) {
      res.send(user);
    } else {
      res.sendStatus(401);
      console.log(user);
    }
  } catch (error) {
    next(error);
  }
});

module.exports = router;
