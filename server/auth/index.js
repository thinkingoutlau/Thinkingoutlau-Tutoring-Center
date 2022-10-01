const router = require("express").Router();
const { User } = require("../db");

router.post("/login", async (req, res, next) => {
  try {
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

router.post("/signup", async (req, res, next) => {
  try {
    const { username, password } = req.body;
    const user = await User.create({ username, password });
    res.send({ token: await user.generateToken() });
  } catch (error) {
    if (error.name === "SequelizeUniqueConstraintError") {
      res.status(401).send("User already exists");
    } else {
      next(err);
    }
  }
});

router.get("/me", async (req, res, next) => {
  try {
    res.send(await User.findByToken(req.headers.authorization));
  } catch (ex) {
    next(ex);
  }
});

module.exports = router;
