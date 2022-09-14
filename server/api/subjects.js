const router = require("express").Router();

router.get("/", async (req, res, next) => {
  try {
    res.send("hello");
  } catch (error) {
    next(error);
  }
});

module.exports = router;
