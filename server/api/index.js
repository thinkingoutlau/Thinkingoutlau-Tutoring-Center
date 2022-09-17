const router = require("express").Router();

//match all requests to /api/...
//look at JPFP for reference if needed

router.use("/users", require("./users"));
router.use("/login", require("./login"));
router.use("/signup", require("./signup"));
router.use("/messages", require("./messages"));
// router.use("/subjects", require("./subjects"));

router.use(function (req, res, next) {
  const err = new Error("Not found.");
  err.status = 404;
  next(err);
});

module.exports = router;
