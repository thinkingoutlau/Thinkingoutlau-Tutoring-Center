const router = require("express").Router();

//match all requests to /api/...
//look at JPFP for reference in needed
//router.use()

router.use(function (req, res, next) {
  const err = new Error("Not found.");
  err.status = 404;
  next(err);
});

module.exports = router;
